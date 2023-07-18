<script setup>
	import d from '../../public/testData/sideMenu.json'
	import ShowReadMe from '@/components/ShowReadMe.vue'
</script>
<template>
	<ShowReadMe />
	<div style="height: 100%; display: flex">
		<SideMenu :data="d" />
	</div>
</template>
