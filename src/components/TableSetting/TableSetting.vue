<!--TableSetting 设置表格哪些列展示，支持指定列默认展示、指定列禁止修改展示设置
@created 2023.08.14
@author Ricky email:zhangqingcq@foxmail.com-->
<script lang="ts" setup>
	/**
	 * @desc 利用table的columns和localstorage对table进行列的显示设置
	 * @param {array} modelValue - 插件的值（v-model,对应table的columns）必填
	 * @param {string} sKey - 插件数据在localstorage的唯一标识，命名规则：插件所在单文件名称_取名时间，如areaNew_202003231639 必填
	 * @param {string} top - 设置面板定位-上（相对于按钮）
	 * @param {string} right - 设置面板定位-右（相对于按钮）
	 * @param {string} width - 设置面板宽度
	 * @param {string} bg - 设置面板背景色
	 * @param {boolean} defaultCheck - 是否设置默认勾选（默认false，用于默认展示所有列），如果设为true（用于默认展示部分列）,则在v-model绑定的columns项里设置showSettingCheck:true
	 * @example 调用示例 <table-search v-model="areaName" :open="openSearch" placeholder="片区名称" @on-search="search" @on-toggle="openSearch=!openSearch"/>
	 */
	import { cloneDeep } from 'lodash-es'
	import t from '../../locale/i18nSFC'

	const emit = defineEmits(['update:modelValue'])
	const props = withDefaults(
		defineProps<{
			modelValue?: any[]
			sKey: string
			top?: string
			right?: string
			width?: string
			bg?: string
			defaultCheck?: boolean
		}>(),
		{
			modelValue: () => [],
			top: '30px',
			right: '0',
			width: '150px',
			bg: '#ccc',
			defaultCheck: false
		}
	)

	const indeterminate = ref(true)
	const checkAll = ref(false)
	const show = ref(false)
	const groupT = ref<any[]>([])
	const groupX = computed(() => {
		let unknown = t('r.unknown')
		if (props.modelValue.length > groupT.value.length) {
			groupT.value = cloneDeep(props.modelValue)
		}
		return groupT.value.map((e: Record<string, any>) => {
			let temp: Record<string, any> = { label: (e && e.title) || unknown }
			if (e && e.disableShowSetting) {
				temp.disabled = true
			}
			return temp
		})
	})
	const disabledGroup = computed(() => groupX.value.filter((e: Record<string, any>) => e.disabled))
	const checkAllGroup = computed({
		get() {
			return props.modelValue.map((e: Record<string, any>) => (e && e.title) || t('r.unknown'))
		},
		set(v: any[]) {
			let subV = groupT.value.filter((e: Record<string, any>) => {
				for (let item of v) {
					if (item === e.title) {
						return true
					}
				}
				return false
			})
			emit('update:modelValue', subV)
		}
	})
	const locale = getCurrentInstance()?.appContext?.config?.globalProperties?.$i18n?.locale

	onMounted(() => {
		let unknown = t('r.unknown')
		let localStr: string | null
		if (locale) {
			localStr = localStorage.getItem(props.sKey + '_' + locale)
		} else {
			localStr = localStorage.getItem(props.sKey)
		}
		if (localStr) {
			checkAllGroup.value = JSON.parse(decodeURI(localStr))
		} else {
			if (props.defaultCheck) {
				checkAllGroup.value = props.modelValue
					.filter((e: Record<string, any>) => e.showSettingCheck)
					.map((e) => (e && e.title) || unknown)
			}
		}
	})

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

	function labelClick() {
		if (!show.value) {
			show.value = true
		}
	}

	function save() {
		if (locale) {
			localStorage.setItem(props.sKey + '_' + locale, encodeURI(JSON.stringify(checkAllGroup.value)))
		} else {
			localStorage.setItem(props.sKey, encodeURI(JSON.stringify(checkAllGroup.value)))
		}
		show.value = false
	}

	function handleCheckAll() {
		if (indeterminate.value) {
			checkAll.value = false
		} else {
			checkAll.value = !checkAll.value
		}
		indeterminate.value = false

		if (checkAll.value) {
			checkAllGroup.value = groupX.value.map((e: Record<string, any>) => e.label)
		} else {
			checkAllGroup.value = disabledGroup.value.map((e: Record<string, any>) => e.label)
		}
	}
</script>

<template>
	<div class="tabSetF">
		<div class="tabSetBt" @click="labelClick">
			<Icon type="md-settings" size="17" />
			<span>{{ t('r.tabSetting') }}</span>
		</div>
		<div
			class="tabSetCard"
			v-show="show"
			:style="{ top: props.top, right: props.right, width: props.width, backgroundColor: props.bg }"
		>
			<div class="topCheck">
				<Checkbox :indeterminate="indeterminate" v-model="checkAll" @click.prevent.native="handleCheckAll">{{
					t('r.all')
				}}</Checkbox>
				<span style="cursor: pointer; float: right" @click="save">{{ t('r.confirm') }}</span>
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
	</div>
</template>
