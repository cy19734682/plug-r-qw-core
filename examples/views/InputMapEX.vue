<script setup>
	import ShowReadMe from '@/components/ShowReadMe.vue'
	import { setTimeout } from '../../src'

	const value = ref({
		name: '光电园(地铁站)',
		address: '6号线',
		district: '重庆市渝北区',
		lng: 106.499401,
		lat: 29.616077
	})
	onMounted(() => {
		setTimeout(() => {
			value.value = {
				lat: 39.992213,
				lng: 116.315839,
				name: '北京大学东门'
			}
		}, 8000)
	})
</script>

<template>
	<ShowReadMe />
	<div class="mapBox">
		<InputMap v-model="value" />
	</div>
</template>

<style scoped>
	.mapBox {
		width: 600px;
		margin: 0 auto;
	}
</style>
