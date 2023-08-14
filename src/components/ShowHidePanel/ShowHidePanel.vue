<!--ShowHidePanel 收展面板，用于展示或收起表格页条件查询表单组，全局UI组件，直接用
@created 2023.07.20
@author Ricky email:zhangqingcq@foxmail.com
@params bg 例如：bg = '#fff' 或 bg = 'white' 不传为透明背景 (bg为自定义属性，控制该组件背景色) <show-hide-panel bg="#fff">需要包装的代码</show-hide-panel> -->
<script lang="ts" setup>
	const props = defineProps<{ bg?: string }>()

	const show = ref(true)
	const getBg = computed(() => (show ? 'background:' + props.bg || 'transparent' : ''))
</script>

<template>
	<div :style="getBg">
		<div v-show="show" class="contentX">
			<slot />
		</div>
		<div class="arrowA">
			<div class="btA" @click="show = !show">
				<Icon :type="show ? 'ios-arrow-up' : 'ios-arrow-down'" size="20" />
			</div>
		</div>
	</div>
</template>
