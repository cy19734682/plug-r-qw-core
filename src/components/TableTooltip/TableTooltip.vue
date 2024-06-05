<script setup lang="ts">
	import { debounce } from 'lodash-es'
	import { Tooltip } from 'view-ui-plus'

	const props = defineProps<{ content?: string | number | boolean | null }>()
	const spanRef = ref()
	const contentRef = ref()

	const tooltipDisabled = ref(true)
	let debounceFunc: any = null
	const maxWidth = ref(200)

	function getSize() {
		const $span = tooltipDisabled.value ? spanRef.value : contentRef.value
		if (!$span) {
			return
		}
		let range: any = document.createRange()
		range.setStart($span, 0)
		range.setEnd($span, $span.childNodes.length)
		const rangeWidth = range.getBoundingClientRect().width
		maxWidth.value = $span.offsetWidth * 2
		tooltipDisabled.value = rangeWidth < $span.offsetWidth

		range = null
	}

	onMounted(() => {
		getSize()

		debounceFunc = debounce(() => {
			nextTick(function () {
				getSize()
			})
		}, 200)

		window.addEventListener('resize', debounceFunc)
	})

	onUpdated(getSize)

	onUnmounted(() => {
		window.removeEventListener('resize', debounceFunc)
	})
</script>

<template>
	<div class="tableTooltip">
		<span ref="spanRef" v-if="tooltipDisabled" class="contentText">{{ props.content }}</span>
		<Tooltip
			v-else
			:content="typeof props.content === 'boolean' ? String(props.content) : props.content ?? ''"
			:max-width="maxWidth"
			transfer
		>
			<span ref="contentRef" class="contentText">{{ props.content }}</span>
		</Tooltip>
	</div>
</template>
