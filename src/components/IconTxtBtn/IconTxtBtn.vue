<!--IconTxtBtn 表格顶部带图标的文字按钮（批量操作等），集成了权限v-has(自定义指令)，可指定图标、大小、按钮文字内容，可禁用
@created 2023.07.19
@author Ricky email:zhangqingcq@foxmail.com-->

<script lang="ts" setup>
	import t from '../../locale/i18nSFC'
	import Proxy from '../../utils/proxy'

	const props = withDefaults(
		defineProps<{
			name: string
			icon?: string
			size?: number
			disabled?: boolean
			has?: string
		}>(),
		{
			icon: 'md-download',
			size: () => Proxy().iconTxtBtnIconSize,
			disabled: false,
			has: ''
		}
	)
	const emit = defineEmits(['click'])

	const txtSize = computed(() => Math.floor((props.size / 17) * Proxy()?.fontSizeBase) + 'px')

	function click(e: any) {
		if (props.disabled) {
			return
		}
		emit('click', e)
	}
</script>

<template>
	<div
		class="tabTopBtnsT"
		@click="click"
		v-has="has"
		:class="{ disabled: props.disabled }"
		:style="{ 'font-size': txtSize }"
	>
		<Icon :type="props.icon" :size="props.size" />
		{{ props.name || t('r.button') }}
	</div>
</template>
