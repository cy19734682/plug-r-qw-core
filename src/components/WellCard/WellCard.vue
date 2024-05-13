<!--WellCard 带标题和顶部按钮的卡片，全局组件,直接使用
@created 2023.11.16
@author Ricky email:zhangqingcq@foxmail.com-->
<script lang="ts" setup>
	import t from '../../locale/i18nSFC'

	const props = withDefaults(
		defineProps<{
			title?: string
			fitToContent?: boolean
			width?: number | string
			height?: number | string
			inline?: boolean
		}>(),
		{
			fitToContent: false,
			width: '100%',
			height: '100%',
			inline: false
		}
	)

	const wellStyle = computed(() => {
		let temp: Record<string, any> = {
			width: props.fitToContent ? 'fit-content' : props.width,
			height: props.fitToContent ? 'fit-content' : props.height
		}
		if (props.inline) {
			temp.display = 'inline-block'
		}
		for (let k in temp) {
			if (temp.hasOwnProperty(k) && typeof temp[k] === 'number' && temp[k] > 0) {
				temp[k] += 'px'
			}
		}
		return temp
	})
</script>

<template>
	<div :style="wellStyle">
		<div :class="['wellCardR', { flexColumnBox: !props.fitToContent }]">
			<div :class="['panelHeader', { notGrow: !props.fitToContent }]">
				<div class="fl" style="font-weight: bold">{{ props.title || t('r.title') }}</div>
				<div class="btsF">
					<slot name="bts" />
				</div>
			</div>
			<div v-if="props.fitToContent">
				<slot />
			</div>
			<div v-else class="growFlexItem relativeBox">
				<div class="fullFlowContent">
					<slot />
				</div>
			</div>
		</div>
	</div>
</template>
