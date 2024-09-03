<script setup lang="ts">
	import { $fetch, domPrint } from '../../src'

	const value = ref([77])
	const data = ref([])

	function print() {
		const t = document.getElementById('printDomH')
		domPrint(t?.outerHTML, '网页打印', { autoPrint: true })
	}

	onMounted(() => {
		$fetch.get(location.pathname + 'testData/checkboxGroupTwoClass.json').then((r: any) => {
			data.value = r
		})
	})
</script>

<template>
	<Button @click="print" style="margin-bottom: 20px">打印</Button>
	<CheckboxGroupTwoClass id="printDomH" class="whiteBg" v-model="value" :data="data" />
</template>

<style scoped lang="less">
	.whiteBg {
		background-color: #fff;
	}
</style>
