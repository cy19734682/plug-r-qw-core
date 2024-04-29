<!--AsyncCascader 远程拉取数据的级联下拉选择框，依据url属性从后端拉取数据，失焦时选择，v-model绑定选中的ID
@created 2023.08.17
@author Ricky email:zhangqingcq@foxmail.com-->

<script lang="ts" setup>
	import { myTypeof } from '../../utils/globalFunc'
	import { findPath } from '../../utils/needImportFunc'
	import $fetch from '../../utils/fetch'
	import t from '../../locale/i18nSFC'
	import { isEmpty, last, isEqual, isString, isNumber, cloneDeep } from 'lodash-es'

	const emit = defineEmits(['update:modelValue', 'on-label-change'])
	const props = withDefaults(
		defineProps<{
			modelValue?: any[] | number | string /*级联绑定值(v-model)*/
			url?: string /*级联数据接口地址*/
			optionVal?: string /*v-model收集节点的哪些字段*/
			optionLabel?: string /*选项的标签对应接口字段*/
			optionFilter?: <T>(
				d: T[]
			) => T[] /*筛选待选项的方法，入参是接口请求回来的待选项数据，返回处理后的待选项（仅进行筛选操作，不要做其它处理）*/
			separator?: string /*选中的label分隔符（多级展示时）,valProp为String（多级）时分隔符*/
			onlyLastVal?: boolean /*只取最后一级*/
			onlyLastLabel?: boolean /*只显示最后一级*/
			filterable?: boolean
			placeholder?: string
			disabled?: boolean
		}>(),
		{
			url: window?.g?.mgrURL ? window.g.mgrURL + '/web/v1/umc/orgs' : '',
			optionVal: 'id',
			optionLabel: 'name',
			separator: '/',
			onlyLastVal: true,
			onlyLastLabel: true,
			filterable: false,
			placeholder: '',
			disabled: false
		}
	)
	const dataC = ref<any[]>([])

	const value = computed<any[]>({
		get() {
			let valProp = props.modelValue
			if (Array.isArray(valProp)) {
				return cloneDeep(valProp)
			} else if (isNumber(valProp)) {
				return findPath({
					group: dataC.value,
					condition: (item) => item?.value === valProp,
					pathKey: 'value'
				})
			} else if (isString(valProp)) {
				return valProp.split(props.separator)
			}
			return []
		},
		set(v: any[]) {
			if (props.onlyLastVal) {
				if (isEmpty(v)) {
					emit('update:modelValue', null)
					emit('on-label-change', null)
				} else {
					emit('update:modelValue', last(v))
				}
			} else {
				if (isEqual(props.modelValue, v)) {
					return
				}
				emit('update:modelValue', cloneDeep(v))
			}
		}
	})

	function getData() {
		if (!props.url) {
			console.error('没有用于拉取级联数据的有效接口地址')
			return
		}
		$fetch
			.get(props.url)
			.then((r: any) => {
				let d: any[] | null = null
				if (r?.data?.records) {
					d = r.data.records
				} else if (r?.data) {
					d = r.data
				} else if (r) {
					d = r
				}
				if (d) {
					if (typeof props.optionFilter === 'function' && myTypeof(props.optionFilter) === 'Function') {
						d = props.optionFilter(d)
					}
					dataC.value = dataFilter(d)
				} else {
					console.warn('级联数据错误，不能使用')
				}
			})
			.catch(() => {
				console.warn('拉取级联数据出错')
			})
	}

	function dataFilter(d: any[]): any[] {
		let temp: any[] = []
		for (let item of d) {
			let tt: Record<string, any> = {
				value: item[props.optionVal],
				label: item[props.optionLabel]
			}
			if (item?.children && !isEmpty(item.children)) {
				tt.children = dataFilter(item.children)
			}
			temp.push(tt)
		}
		return temp
	}

	function format(labels: any[]) {
		if (props.onlyLastLabel) {
			return last(labels)
		}
		return labels.join(props.separator)
	}

	function onChange(v: any, selectedDetail: any[]) {
		let label: string = ''
		if (!isEmpty(selectedDetail)) {
			label = selectedDetail
				.map((item) => {
					return item?.label
				})
				.join(props.separator)
		}
		emit('on-label-change', label)
	}

	onMounted(getData)
</script>

<template>
	<Cascader
		:data="dataC"
		v-model="value"
		@on-change="onChange"
		change-on-select
		transfer
		:disabled="props.disabled"
		:render-format="format"
		:placeholder="props.placeholder || t('r.pSelect')"
		:filterable="props.filterable"
	/>
</template>
