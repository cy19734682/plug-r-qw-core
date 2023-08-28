<!--TableIconBtn 表格用图标按钮，集成了权限v-has(自定义指令)，可指定图标、大小、提示信息，可禁用
@created 2023.07.20
@author Ricky email:zhangqingcq@foxmail.com-->
<script lang="ts" setup>
	import t from '../../locale/i18nSFC'

	const emit = defineEmits(['click'])
	const props = withDefaults(
		defineProps<{ icon?: string; title?: string; has?: string; disabled?: boolean; size?: number }>(),
		{
			icon: 'md-radio-button-on',
			has: '',
			disabled: false,
			size: 24
		}
	)

	function onClick(e: any) {
		if (props.disabled) {
			return
		}
		emit('click', e)
	}
</script>

<template>
	<div
		class="tableBtnsG"
		:class="{ disabled: props.disabled }"
		v-has="props.has"
		@click="onClick"
		:title="props.title || t('r.button')"
	>
		<Icon :type="props.icon" :size="props.size" />
	</div>
</template>
