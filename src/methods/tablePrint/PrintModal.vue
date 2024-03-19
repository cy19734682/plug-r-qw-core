<!--PrintModal 表格打印，可以在预览页面调整每列宽度以及可以选择打印的列
@created 2024.03.14
@author Ricky email:zhangqingcq@foxmail.com-->

<script setup lang="ts">
	import t from '../../locale/i18nSFC'
	import { useRoute } from 'vue-router'
	import TableSetting from '../../components/TableSetting/TableSetting.vue'
	import IconTxtBtn from '../../components/IconTxtBtn/IconTxtBtn.vue'
	import TableIconBtn from '../../components/TableIconBtn/TableIconBtn.vue'

	const route = useRoute()
	const title = ref()
	const disabled = ref(false)
	const autoPrint = ref(false)
	const help = ref(false)
	const isFrom = ref()
	const sKey = 'tablePrint_' + Date.now().toString()
	const customClass = ref('')
	const columns = ref([])
	const tableData = ref([])

	const close = () => {
		if (isFrom.value) {
			window.sessionStorage.removeItem('print_' + isFrom.value)
		}
		window.sessionStorage.removeItem(sKey)
		window.close()
	}

	const wallClick = () => {
		if (help.value) {
			help.value = false
		}
	}

	const print = () => {
		help.value = false
		let tc = window.setTimeout(() => {
			window.clearTimeout(tc)
			window.print()
		}, 100)
	}

	const init = () => {
		isFrom.value = route?.params?.isFrom
		if (isFrom.value) {
			let d = window.sessionStorage.getItem('print_' + isFrom.value)
			if (d) {
				const _d = JSON.parse(d)
				if (!_d) {
					disabled.value = true
					return
				}
				columns.value = _d.columns
				tableData.value = _d.data
				title.value = _d.title
				customClass.value = _d?.config?.customClass || ''
				autoPrint.value = _d?.config?.autoPrint || false
				document.title = (title.value || t('r.print')) + '_' + new Date().toLocaleString()
			} else {
				disabled.value = true
			}
		}
	}

	onMounted(() => {
		if (autoPrint.value) {
			let tc = window.setTimeout(() => {
				window.clearTimeout(tc)
				print()
			}, 100)
		}
	})
	init()
</script>

<template>
	<div class="tablePrintModal" :class="[customClass]" @click="wallClick">
		<div class="msgL notPrint" v-show="disabled">{{ t('r.printGuide.9') }}</div>
		<div class="a4Line aL notPrint" v-show="!disabled"
			><p>{{ t('r.printGuide.7') }}</p> <p>{{ t('r.printGuide.5') }}</p></div
		>
		<div class="a4Line aR notPrint" v-show="!disabled"
			><p>{{ t('r.printGuide.7') }}</p> <p>{{ t('r.printGuide.6') }}</p></div
		>
		<div class="a4Line bL notPrint" v-show="!disabled"
			><p>{{ t('r.printGuide.8') }}</p> <p>{{ t('r.printGuide.5') }}</p></div
		>
		<div class="a4Line bR notPrint" v-show="!disabled"
			><p>{{ t('r.printGuide.8') }}</p> <p>{{ t('r.printGuide.6') }}</p></div
		>
		<div class="topsL notPrint" v-show="!disabled">
			<div class="topsLTitle">{{ title || t('r.print') }}</div>
			<div class="topsLBtn">
				<IconTxtBtn icon="md-help-circle" :name="t('r.help')" @click.stop="help = !help" />
				<IconTxtBtn icon="md-print" :name="t('r.preview')" @click="print" />
				<TableSetting v-model="columns" :s-key="sKey" storage="sessionStorage" />
				<TableIconBtn icon="md-close" @click="close" :title="t('r.close')" />
			</div>
			<div class="topsLHelp" v-show="help">
				<p>{{ t('r.printGuide.1') }}</p>
				<p>{{ t('r.printGuide.2') }}</p>
				<p>{{ t('r.printGuide.3') }}</p>
				<p>{{ t('r.printGuide.4') }}</p>
			</div>
		</div>
		<Table class="tablePW" :columns="columns" :data="tableData" border v-show="!disabled" />
	</div>
</template>
