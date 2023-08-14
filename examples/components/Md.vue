<script setup lang="ts">
	import MarkdownIt from 'markdown-it'
	import MarkdownItAnchor from 'markdown-it-anchor'

	const md = new MarkdownIt().use(MarkdownItAnchor)

	const props = defineProps<{ data: string }>()
</script>

<template>
	<div class="markdown-body myCardB">
		<div v-html="md.render(props.data)"></div>
	</div>
</template>
