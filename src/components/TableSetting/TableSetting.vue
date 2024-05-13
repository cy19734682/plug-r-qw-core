<!--TableSetting 设置表格哪些列展示，支持指定列默认展示、指定列禁止修改展示设置
@created 2023.08.14
@author Ricky email:zhangqingcq@foxmail.com-->
<script lang="ts" setup>
	/**
	 * @desc 利用table的columns和localstorage对table进行列的显示设置
	 * @param {array} modelValue - 插件的值（v-model,对应table的columns）必填
	 * @param {string} sKey - 插件数据在localstorage的唯一标识，命名规则：插件所在单文件名称_取名时间，如areaNew_202003231639 必填
	 * @param {string} [width] - 设置面板宽度
	 * @param {string} [bg] - 设置面板背景色，默认值可通过全局属性tableSettingBg改变，默认：`'#fff'`
	 * @param {string} [placement] - 设置面板呼出位置，默认：'bottom-end'
	 * @param {boolean} [defaultCheck] - 是否设置默认勾选（默认false，用于默认展示所有列），如果设为true（用于默认展示部分列）,则在v-model绑定的columns项里设置showSettingCheck:true
	 * @param {string} [storage] - 指定使用浏览器缓存类型，可选值`'localStorage'`、`'sessionStorage'`，默认：`localStorage`
	 * @param {boolean} [transfer] - 是否将面板放置于 body 内，在 Tabs、带有 overflow:hidden 的 上级容器内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果，默认值可通过全局属性tableSettingTransfer改变，默认：`true`
	 * @param {boolean} [eventsEnabled] - 是否开启 Popper 的 eventsEnabled 属性，开启可能会牺牲一定的性能，但可以让弹出面板根据页面环境动态改变位置和自身尺寸，提升体验，默认值可通过全局属性tableSettingEventsEnabled改变，默认：`true`
	 * @example 调用示例 <table-setting v-model="columns" sKey="tableSettingEx_202007030903"/>
	 */
	import Popper from 'popper.js'
	import type { Placement } from 'popper.js'
	import { cloneDeep } from 'lodash-es'
	import vClickOutside from '../../directives/clickOutside'
	import t from '../../locale/i18nSFC'
	import Proxy from '../../utils/proxy'
	import { setTimeout } from '../../utils/timer'
	import SwalConfirm from '../../utils/swalConfirm'

	const emit = defineEmits(['update:modelValue'])
	const props = withDefaults(
		defineProps<{
			modelValue?: any[]
			sKey: string
			width?: string
			bg?: string
			placement?: Placement
			defaultCheck?: boolean
			storage?: 'localStorage' | 'sessionStorage'
			transfer?: boolean
			eventsEnabled?: boolean /*是否开启 Popper 的 eventsEnabled 属性，开启可能会牺牲一定的性能，但可以让弹出面板根据页面环境动态改变位置和自身尺寸，提升体验*/
		}>(),
		{
			modelValue: () => [],
			width: '240px',
			bg: () => Proxy().tableSettingBg,
			placement: 'bottom-end',
			defaultCheck: false,
			storage: 'localStorage',
			transfer: () => Proxy().tableSettingTransfer,
			eventsEnabled: () => Proxy().tableSettingEventsEnabled
		}
	)

	const buttonRef = ref()
	const popperRef = ref()

	const indeterminate = ref(true)
	const checkAll = ref(false)
	const show = ref(false)
	const groupT = ref<any[]>([])
	const groupX = computed(() => {
		let unknown = t('r.unknown')
		if (props.modelValue?.length > groupT.value.length) {
			groupT.value = cloneDeep(props.modelValue)
		}
		return groupT.value.map((e: Record<string, any>) => {
			let temp: Record<string, any> = { label: e?.title || unknown }
			if (e?.disableShowSetting) {
				temp.disabled = true
			}
			return temp
		})
	})
	const disabledGroup = computed(() => groupX.value.filter((e: Record<string, any>) => e?.disabled))
	const checkAllGroup = computed({
		get() {
			return props.modelValue?.map?.((e: Record<string, any>) => e?.title || t('r.unknown'))
		},
		set(v: any[]) {
			let subV = groupT.value.filter((e: Record<string, any>) => {
				for (let item of v) {
					if (item === e?.title) {
						return true
					}
				}
				return false
			})
			emit('update:modelValue', subV)
		}
	})
	const locale = getCurrentInstance()?.appContext?.config?.globalProperties?.$i18n?.locale
	let _popper: any = null

	onMounted(() => {
		let unknown = t('r.unknown')
		let localStr: string | null = getStorage()
		if (localStr) {
			checkAllGroup.value = JSON.parse(decodeURI(localStr))
		} else {
			if (props.defaultCheck) {
				checkAllGroup.value = props.modelValue
					.filter((e: Record<string, any>) => e?.showSettingCheck)
					.map((e) => e?.title || unknown)
			}
		}

		nextTick(function () {
			if (!buttonRef.value || !popperRef.value) {
				return
			}
			_popper = new Popper(buttonRef.value, popperRef.value, {
				placement: props.placement,
				eventsEnabled: props.eventsEnabled,
				modifiers: {
					computeStyle: {
						gpuAcceleration: false
					},
					preventOverflow: {
						boundariesElement: 'window'
					}
				},
				onUpdate: (d: any) => {
					if (d?.popper && d.instance?.popper) {
						const c = calcPopperHeight(d)
						const { needChange } = c
						if (needChange) {
							const { height } = c
							const el = d.instance.popper
							if (el.style) {
								el.style.height = `${height}px`
							}
						}
					}
				}
			})
		})

		setTimeout(() => {
			show.value = true
			_popper?.update?.()
			nextTick(function () {
				show.value = false
			})
		}, 0)
	})

	onBeforeUnmount(function () {
		_popper?.destroy?.()
	})

	function calcPopperHeight(d: Record<string, any>) {
		const { height } = d.popper
		const el = d.instance.popper
		//浏览器窗口高度
		const h = window.innerHeight
		let _h = 0
		if (el.childNodes?.length) {
			for (let i = 0; i < el.childNodes.length; i++) {
				_h += el.childNodes[i]?.offsetHeight
			}
		}
		if (h < height - 10 || height < _h) {
			return {
				needChange: true,
				height: h - 10 < _h ? h - 10 : _h
			}
		} else {
			return { needChange: false }
		}
	}

	function checkAllGroupChange(data: any[]) {
		if (data.length === groupX.value.length) {
			indeterminate.value = false
			checkAll.value = true
		} else if (data.length > disabledGroup.value.length) {
			indeterminate.value = true
			checkAll.value = false
		} else {
			indeterminate.value = false
			checkAll.value = false
		}
	}

	watch(() => checkAllGroup.value, checkAllGroupChange, {
		immediate: true,
		deep: true
	})

	function close() {
		if (show.value) {
			if (getChange()) {
				SwalConfirm(t('r.notSave'), '', 'warning', save)
			}
			show.value = false
		}
	}

	function labelClick() {
		if (!show.value) {
			show.value = true
			nextTick(function () {
				_popper?.update?.()
			})
		} else {
			close()
		}
	}

	function save() {
		if (locale) {
			window[props.storage].setItem(props.sKey + '_' + locale, encodeURI(JSON.stringify(checkAllGroup.value)))
		} else {
			window[props.storage].setItem(props.sKey, encodeURI(JSON.stringify(checkAllGroup.value)))
		}
		close()
	}

	function clickOutsideHandle(event: any) {
		if (show.value) {
			if (props.transfer) {
				const $el = popperRef.value
				if ($el === event?.target || $el?.contains?.(event?.target)) {
					return
				}
			}

			event?.preventDefault?.()
			close()
		}
	}

	function handleCheckAll() {
		if (indeterminate.value) {
			checkAll.value = false
		} else {
			checkAll.value = !checkAll.value
		}
		indeterminate.value = false

		if (checkAll.value) {
			checkAllGroup.value = groupX.value.map((e: Record<string, any>) => e?.label)
		} else {
			checkAllGroup.value = disabledGroup.value.map((e: Record<string, any>) => e?.label)
		}
	}

	function getStorage() {
		let localStr
		if (locale) {
			localStr = window[props.storage].getItem(props.sKey + '_' + locale)
		} else {
			localStr = window[props.storage].getItem(props.sKey)
		}
		return localStr
	}

	function getChange() {
		let t = getStorage()
		if (t) {
			t = JSON.parse(decodeURI(t))
			if (t?.length !== checkAllGroup.value?.length) {
				return true
			} else {
				for (let e of t) {
					if (checkAllGroup.value.indexOf(e) === -1) {
						return true
					}
				}
			}
		} else {
			return true
		}
		return false
	}
</script>

<template>
	<div class="tabSetF" v-click-outside="clickOutsideHandle">
		<div ref="buttonRef" class="tabSetBt" @click="labelClick">
			<Icon type="md-settings" size="17" />
			<span class="cannotSelect">{{ t('r.tabSetting') }}</span>
		</div>
		<Teleport to="body" :disabled="!props.transfer">
			<div ref="popperRef" class="tabSetCard" v-show="show" :style="{ width: props.width, backgroundColor: props.bg }">
				<div class="topCheck">
					<Checkbox :indeterminate="indeterminate" v-model="checkAll" @click.prevent.native="handleCheckAll">{{
						t('r.all')
					}}</Checkbox>
					<div class="btnR" style="float: right; display: inline-block" @click="save">
						<span class="iconfont icon-r-save"></span>
						<span>{{ t('r.save') }}</span>
					</div>
				</div>
				<CheckboxGroup v-model="checkAllGroup">
					<Checkbox
						v-for="(itemT, index) in groupX"
						class="setItem"
						:label="itemT && itemT.label"
						:key="'tabSet_' + props.sKey + index"
						:disabled="itemT && itemT.disabled"
					/>
				</CheckboxGroup>
			</div>
		</Teleport>
	</div>
</template>
