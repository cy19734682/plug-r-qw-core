<!--SelectScrollMore 远程下拉选择框，下拉滚动加载更多选项，支持筛选
@created 2023.11.28
@author Ricky email:zhangqingcq@foxmail.com-->

<script setup lang="ts">
	import { debounce, isEmpty, cloneDeep, isString } from 'lodash-es'
	import { isValidValue, myTypeof } from '../../utils/globalFunc'
	import $fetch from '../../utils/fetch'
	import { Message } from 'view-ui-plus'
	import t from '../../locale/i18nSFC'

	const emit = defineEmits(['update:modelValue', 'on-change', 'update-option-finish'])
	const props = withDefaults(
		defineProps<{
			modelValue?: string | number | any[] /*插件值，支持双向绑定v-model*/
			url: string /*待选项接口地址，不带条件*/
			searchData?: Record<string, any> /*待选项接口条件*/
			getOptions?: boolean /*是否拉取待选项,false:不拉取，并清空待选项和值*/
			optionFilter?: (d: any) => any /*接口返回数据处理函数，传入接口返回的数据，返回处理后的数据*/
			optionsLabelKey?: string | string[] /*待选项label取接口数据中哪个字段*/
			optionsValKey?: string /*待选项value取接口数据中哪个字段*/
			searchKey?: string /*搜索框的值在拉取待选项数据的条件中对应的key*/
			searchWordsRequired?: boolean /*只有在searchKey对应字段有值时（用户输入内容搜索时）拉取数据*/
			collectLabel?: boolean /*需要在选中时返回出value以外其他字段*/
			placeholder?: string
			disabled?: boolean
		}>(),
		{
			searchData: () => ({ size: 10 }),
			getOptions: true,
			optionsLabelKey: 'name',
			optionsValKey: 'id',
			searchKey: 'name',
			searchWordsRequired: false,
			collectLabel: false,
			disabled: false
		}
	)

	let current = ref(1)
	let pages = 1
	const searchStr = ref('')
	const options = shallowRef<Record<string, any>[]>([])
	let historyData: Record<string, any> = {}
	let isFresh = true
	let urlChanged = false
	const transferClass = 'scm' + Math.random()

	const placeholderT = computed(() => {
		return searchStr.value ? t('r.searchFor') + searchStr.value : props.placeholder || t('r.pInput')
	})

	const valueT = computed({
		get() {
			return props.modelValue ?? ''
		},
		set(val: any) {
			emit('update:modelValue', val ?? '')
			if (props.collectLabel && val !== undefined) {
				let temp = {}
				for (let e of options.value) {
					if (e[props.optionsValKey] === val) {
						temp = JSON.parse(JSON.stringify(e))
						break
					}
				}
				emit('on-change', temp)
			}
		}
	})

	const searchDataT = computed(() => {
		return props.searchKey
			? {
					...props.searchData,
					current: current.value,
					[props.searchKey]: searchStr.value
				}
			: {
					...props.searchData,
					current: current.value
				}
	})

	watch(
		() => props.getOptions,
		(after) => {
			if (after) {
				if (isFresh) {
					getData()
				}
			} else {
				reset()
			}
		},
		{ immediate: true }
	)

	watch(
		() => props.url,
		(after) => {
			if (after) {
				urlChanged = true
			}
		}
	)

	const selectScrollSourceRef = ref()

	function addInputEventListener() {
		/*私有，不可调用*/
		const inputEl = selectScrollSourceRef.value.$el.querySelector('.ivu-select-input[type="text"]')
		inputEl.addEventListener('keyup', getOption)
	}

	function reset() {
		/*私有，不可调用*/
		if (!isFresh) {
			valueT.value = ''
			isFresh = true
			searchStr.value = ''
			options.value = []
			current.value = 1
			pages = 1
			historyData = {}
			urlChanged = false
		}
	}

	function isSelect(val: any) {
		/*私有，不可调用*/
		for (let item of options.value) {
			if (item?.label === val) {
				return true
			}
		}
		return false
	}

	const getOption = debounce(function (e: any) {
		/*私有，不可调用*/
		const val = e?.target?.value
		if (!isSelect(val)) {
			if (isValidValue(val)) {
				if (urlChanged) {
					reset()
				} else {
					if (isEmpty(historyData)) {
						historyData.current = current.value
						historyData.pages = pages
						historyData.options = cloneDeep(options.value)
					}
					if (isValidValue(valueT.value)) {
						valueT.value = ''
					}
				}
				searchStr.value = String(val)
				options.value = []
				current.value = 1
				isFresh = true
				getData()
			} else {
				if (urlChanged) {
					reset()
					getData()
				} else {
					valueT.value = ''
					searchStr.value = ''
					if (historyData.current) {
						current.value = historyData.current
						pages = historyData.pages
						options.value = cloneDeep(historyData.options)
						historyData = {}
					} else {
						getData()
					}
				}
			}
		}
	}, 600)

	function loadMore() {
		/*私有，不可调用*/
		if (urlChanged) {
			reset()
		}
		if (current.value < pages) {
			++current.value
			nextTick(function () {
				getData()
			})
		} else {
			Message.warning({
				background: true,
				content: t('r.noMore')
			})
		}
	}

	function getData() {
		/*私有，不可调用*/
		return new Promise((resolve, reject) => {
			if (props.getOptions) {
				if (props.searchWordsRequired && !isValidValue(searchStr.value)) {
					resolve(false)
					return
				}
				$fetch
					.get(props.url, searchDataT.value)
					.then((r: any) => {
						isFresh = false
						let temp: any[] = []
						if (r?.data?.records) {
							temp = r.data.records
							pages = r.data.pages
						} else if (r?.data && myTypeof(r.data) === 'Array') {
							temp = r.data
							pages = r.pages
						} else if (r?.data && myTypeof(r.data) === 'Object') {
							temp = [r.data]
							pages = 1
						}
						if (typeof props.optionFilter === 'function' && myTypeof(props.optionFilter) === 'Function') {
							temp = props.optionFilter(temp)
						}
						if (!isEmpty(temp)) {
							temp = temp.map((e, i) => {
								let label = t('r.optionLabel') + i
								if (Array.isArray(props.optionsLabelKey)) {
									let labelT: any[] = []
									for (let j = 1, len = props.optionsLabelKey.length; j < len; j++) {
										labelT.push(e[props.optionsLabelKey[j]])
									}
									label = `${e[props.optionsLabelKey[0]]}(${String(labelT)})`
								} else if (isString(props.optionsLabelKey)) {
									label = e[props.optionsLabelKey]
								}
								if (props.collectLabel) {
									let eT = cloneDeep(e)
									delete eT.value
									delete eT.label
									return {
										value: e[props.optionsValKey],
										label: label,
										...eT
									}
								}
								return {
									value: e[props.optionsValKey],
									label: label
								}
							})
						}
						options.value.push(...temp)
						/*去重*/
						let hash: Record<string, any> = {}
						options.value = options.value.filter((e) => {
							if (!hash[e?.value]) {
								hash[e?.value] = true
								return true
							}
							return false
						})
						nextTick(function () {
							emit('update-option-finish')
						})
						resolve(true)
					})
					.catch(() => {
						Message.error(t('r.getDataError'))
						reject(t('r.getDataError'))
					})
			} else {
				resolve(false)
			}
		})
	}

	onMounted(addInputEventListener)
</script>

<template>
	<Select
		v-model="valueT"
		ref="selectScrollSourceRef"
		:transfer-class-name="transferClass"
		v-bind="$attrs"
		transfer
		filterable
		v-loadmore:[transferClass]="loadMore"
		:placeholder="placeholderT"
		:disabled="disabled"
	>
		<Option
			v-for="(item, index) in options"
			:key="'op' + index"
			:value="item?.value"
			:label="item?.label"
			:disabled="item?.disabled"
		/>
	</Select>
</template>
