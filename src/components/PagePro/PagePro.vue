<!--PagePro 极简页签，支持v-model绑定当前页数，可选每页条数，可禁用
@created 2024.04.18
@author Ricky email:zhangqingcq@foxmail.com-->

<script setup lang="ts">
	import t from '../../locale/i18nSFC'
	import Proxy from '../../utils/proxy'
	import { getStringWidth } from '../../utils/needImportFunc'

	const emit = defineEmits(['update:modelValue', 'on-change', 'on-page-size-change'])
	const pageRef = ref()

	const props = withDefaults(
		defineProps<{
			modelValue?: number
			total?: number
			pageSize?: number
			size?: 'small' | 'default'
			pageSizeOpts?: number[]
			showTotal?: boolean /*是否展示total*/
			showSizer?: boolean /*是否展示sizer*/
			transfer?: boolean
			disabled?: boolean
		}>(),
		{
			modelValue: 1,
			total: 0,
			pageSize: 10,
			size: 'default',
			pageSizeOpts: () => Proxy()?.pageSizes || [10, 20, 50, 100],
			showTotal: () => Proxy()?.pageShowTotal,
			showSizer: () => Proxy()?.pageShowSizer,
			transfer: true,
			disabled: false
		}
	)

	const _fontSizeBase = Proxy?.()?.fontSizeBase || 14
	const currentPadding = ref(16)

	const current = computed({
		get() {
			return props.modelValue
		},
		set(v) {
			emit('update:modelValue', v)
			emit('on-change', v)
		}
	})

	const pageSizeT = computed({
		get() {
			return props.pageSize
		},
		set(v) {
			emit('on-page-size-change', v)
			if (current.value !== 1) {
				current.value = 1
			}
		}
	})

	const currentSize = computed(() => {
		const t = getStringWidth(String(props.total || 0), _fontSizeBase) + currentPadding.value + 2
		return t < 32 ? 32 : t
	})

	watch(
		currentSize,
		(v) => {
			nextTick(function () {
				changeCurrentSize(v)
			})
		},
		{ immediate: true }
	)

	function getPadding() {
		const $inputEl = pageRef.value?.$el?.querySelector?.('input')
		if (!$inputEl) {
			return 16
		}
		const inputStyle = window.getComputedStyle($inputEl)
		const paddingL = inputStyle?.paddingLeft
		const paddingR = inputStyle?.paddingRight
		if (!paddingL || !paddingR) {
			return 16
		}
		return Number(paddingL.replace('px', '')) + Number(paddingR.replace('px', ''))
	}

	function changeCurrentSize(val: any) {
		const $inputEl = pageRef.value?.$el?.querySelector?.('input')
		if ($inputEl?.style) {
			$inputEl.style.width = `${val}px`
		}
	}

	onMounted(() => {
		currentPadding.value = getPadding()
	})
</script>

<template>
	<div class="pagePro" :class="{ pageProDefault: props.size === 'default' }">
		<span v-if="props.showTotal" class="pageTotal"
			>{{ t('r.total') + ' ' }}{{ props.total }}{{ ' ' + t('r.items') }}</span
		>
		<Page
			ref="pageRef"
			v-model="current"
			:page-size="pageSizeT"
			:total="props.total"
			:size="props.size"
			:page-size-opts="props.pageSizeOpts"
			:disabled="props.disabled"
			simple
		/>
		<div class="pageProSize" v-if="props.showSizer">
			<Select v-model="pageSizeT" :size="props.size" :transfer="props.transfer" :disabled="props.disabled">
				<Option v-for="item in props.pageSizeOpts" :value="item" :key="item">{{ item }} {{ t('r.page') }}</Option>
			</Select>
		</div>
	</div>
</template>
