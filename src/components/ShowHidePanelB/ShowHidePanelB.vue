<!--ShowHidePanelB 收展面板，用于展示或收起表格页条件查询表单组
@created 2023.07.31
@author Ricky email:zhangqingcq@foxmail.com
@params modelValue(v-model绑定)展开收起
@params bg 例如：bg = '#fff' 或 bg = 'white' 不传为透明背景 (bg为自定义属性，控制该组件背景色) <show-hide-panel-b v-model="open" bg="#fff">需要包装的代码</show-hide-panel-b> -->

<script setup lang="ts">
	const props = withDefaults(defineProps<{ modelValue?: boolean; bg?: string }>(), {
		modelValue: false,
		bg: 'transparent'
	})
	const emit = defineEmits(['update:modelValue'])
	const show = computed({
		get() {
			return props.modelValue
		},
		set(d: boolean) {
			emit('update:modelValue', d)
		}
	})

	const getBg = computed(() => (show.value ? 'background:' + props.bg : ''))
</script>

<template>
	<div :style="getBg">
		<div v-show="show" class="contentZ">
			<slot />
		</div>
	</div>
</template>
