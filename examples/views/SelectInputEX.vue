<script setup lang="ts">
	import ShowReadMe from '@/components/ShowReadMe.vue'
	import { SelectInput } from '../../src'
	const value = ref<Record<string, any>>({ key: '', val: null })
	const selectOption = [
		{
			label: '名称',
			val: 'name'
		},
		{
			label: '身份证号',
			val: 'id'
		}
	]

	function handleChange(val: any) {
		console.log(val)
	}
</script>

<template>
	<show-read-me />
	<select-input v-model="value" :select-option="selectOption" @on-change="handleChange" />
	<p class="outJ">
		组件key： <span>{{ value.key }}</span>
	</p>
	<p class="outJ">
		组件val： <span>{{ value.val }}</span>
	</p>
	<p class="outJ">
		组件beforeKey： <span>{{ value.beforeKey }}</span>
	</p>
</template>
<style lang="less" scoped>
	.outJ {
		margin-top: 20px;
		padding-left: 20px;
	}
</style>
