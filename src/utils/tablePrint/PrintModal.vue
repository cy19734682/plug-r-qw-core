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
	const domPrint = ref(false)
	const autoPrint = ref(false)
	const width = ref(715)
	const help = ref(false)
	const isFrom = ref()
	const sKey = 'tablePrint_' + Date.now().toString()
	const customClass = ref('')
	const columns = ref([])
	const tableData = ref([])
	const isDrag = ref(false)

	const domContainerStyle = computed(() => {
		return {
			width: width.value + 'px'
		}
	})

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

	const dragStart = () => {
		isDrag.value = true
	}
	const handleDrag = (e: any) => {
		if (isDrag.value) {
			width.value = e?.layerX - 20
		}
	}
	const dragEnd = () => {
		if (isDrag.value) {
			isDrag.value = false
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
				domPrint.value = _d?.config?.domPrint || false
				autoPrint.value = _d?.config?.autoPrint || false
				width.value = _d?.config?.width || 715
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
		document.addEventListener('click', wallClick)
		document.addEventListener('mousemove', handleDrag)
		document.addEventListener('mouseup', dragEnd)
	})
	init()
</script>

<template>
	<div class="tablePrintModal" :class="[customClass]">
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
				<TableSetting v-if="!domPrint" v-model="columns" :s-key="sKey" storage="sessionStorage" />
				<TableIconBtn icon="md-close" @click="close" :title="t('r.close')" />
			</div>
			<div class="topsLHelp" v-show="help">
				<p v-if="!domPrint">
					<span>1. </span>
					<span>{{ t('r.printGuide.1') }}</span>
				</p>
				<p v-if="!domPrint">
					<span>2. </span>
					<span>{{ t('r.printGuide.2') }}</span>
				</p>
				<p v-if="domPrint">
					<span>1. </span>
					<span>{{ t('r.printGuide.10') }}</span>
				</p>
				<p>
					<span>{{ domPrint ? '2. ' : '3. ' }}</span>
					<span>{{ t('r.printGuide.3') }}</span>
				</p>
				<p>
					<span>{{ domPrint ? '3. ' : '4. ' }}</span>
					<span>{{ t('r.printGuide.4') }}</span>
				</p>
			</div>
		</div>
		<div v-if="domPrint" class="domPrintSetting notPrint" :style="domContainerStyle">
			<div class="settingLine" @mousedown.stop="dragStart"></div>
		</div>
		<div v-if="domPrint" class="domPrintContent" v-html="tableData" :style="domContainerStyle"></div>
		<Table v-if="!domPrint" class="tablePW" :columns="columns" :data="tableData" border v-show="!disabled" />
	</div>
</template>
