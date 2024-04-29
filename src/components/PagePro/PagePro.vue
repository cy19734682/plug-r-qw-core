<!--PagePro 极简页签，支持v-model绑定当前页数，可选每页条数，可禁用
@created 2024.04.18
@author Ricky email:zhangqingcq@foxmail.com-->

<script setup lang="ts">
	import t from '../../locale/i18nSFC'
	import Proxy from '../../utils/proxy'

	const emit = defineEmits(['update:modelValue', 'on-change', 'on-page-size-change'])

	const props = withDefaults(
		defineProps<{
			modelValue?: number
			total?: number
			pageSize?: number
			size?: 'small' | 'default'
			pageSizeOpts?: number[]
			transfer?: boolean
			disabled?: boolean
		}>(),
		{
			modelValue: 1,
			total: 0,
			pageSize: 10,
			size: 'default',
			pageSizeOpts: () => Proxy()?.pageSizes || [10, 20, 50, 100],
			transfer: true,
			disabled: false
		}
	)

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
</script>

<template>
	<div class="pagePro" :class="{ pageProDefault: props.size === 'default' }">
		<Page
			v-model="current"
			:page-size="pageSizeT"
			:total="props.total"
			:size="props.size"
			:page-size-opts="props.pageSizeOpts"
			:disabled="props.disabled"
			simple
		/>
		<div class="pageProSize">
			<Select v-model="pageSizeT" :size="props.size" :transfer="props.transfer" :disabled="props.disabled">
				<Option v-for="item in props.pageSizeOpts" :value="item" :key="item">{{ item }} {{ t('r.page') }}</Option>
			</Select>
		</div>
	</div>
</template>
