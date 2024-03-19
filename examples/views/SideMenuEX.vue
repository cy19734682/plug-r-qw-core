<script lang="ts" setup>
	import { $fetch } from '../../src'
	import ShowReadMe from '@/components/ShowReadMe.vue'

	const d = ref([])
	onMounted(() => {
		$fetch.get('testData/sideMenu.json').then((r: any) => {
			d.value = r
		})
	})
</script>
<template>
	<ShowReadMe />
	<div style="height: 100%; display: flex">
		<SideMenu :data="d" />
	</div>
</template>
