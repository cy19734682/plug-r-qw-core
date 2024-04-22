<script setup lang="ts">
	import {
		downloadFileReaderFile,
		$swal,
		messageBox,
		$fetch,
		setTimeout,
		BtTablePage,
		IconTxtBtn,
		FormModal,
		TableIconBtn,
		tablePrint
	} from '../../src'
	import { cloneDeep } from 'lodash-es'
	import imgK from '../assets/testo.png'
	import ShowReadMe from '@/components/ShowReadMe.vue'
	import NodeServeInfo from '@/components/NodeServeInfo.vue'

	const formModalRef = ref()
	const btTab = ref()
	const action = ref('new')
	const nodeServer = ref(false)
	const selectMode = ref('radio')
	const total = ref(0)
	const searchData = ref<Record<string, any>>({})
	let tabData: any = []
	const columns = [
		{
			title: 'ID',
			key: 'id',
			width: 80
		},
		{
			title: '文件名称',
			key: 'name',
			minWidth: 550,
			render: (_h: any, params: Record<string, any>) => {
				return h(
					'span',
					{
						class: 'link',
						onClick: () => {
							downloadFileReaderFile('模拟文件下载', imgK)
						}
					},
					params.row.name
				)
			}
		},
		{
			title: '文件类型',
			minWidth: 100,
			key: 'mimeType'
		},
		{
			title: '文件大小',
			minWidth: 100,
			key: 'size'
		},
		{
			title: '备注',
			minWidth: 200,
			key: 'remark'
		},
		{
			title: '操作',
			width: 240,
			render: (_h: any, params: Record<string, any>) => {
				return h('div', [
					h(TableIconBtn, {
						icon: 'ios-create',
						title: '编辑',
						onClick: () => {
							if (nodeServer.value) {
								action.value = 'edit'
								formModalRef.value.updateValGroup(params.row)
								formModalRef.value.setItemToValGroup({ id: params.row.id }, true)
								formModalRef.value.open()
							} else {
								$swal('提示', '仅在node-serve模式下可执行编辑', 'info')
							}
						}
					}),
					h(TableIconBtn, {
						icon: 'ios-trash',
						title: '删除',
						onClick: () => {
							messageBox({
								content: '确定模拟执行删除操作？',
								onOk: () => {
									if (nodeServer.value) {
										$fetch.delete('/node-serve/bt-table-page', { id: params.row.id }).then((r: any) => {
											if (r?.code === 0) {
												$swal('删除成功', '', 'success')
												getData()
											} else {
												$swal('删除失败', '', 'error')
											}
										})
									} else {
										setTimeout(() => {
											$swal('成功', '假装删除成功', 'success')
										}, 500)
									}
								}
							})
						}
					})
				])
			}
		}
	]
	const formData = [
		{
			type: 'txt',
			val: '正常的文件系统应该是上传文件，我们这里只是演示btTablePage使用方法，手动填写这些字段就行',
			label: '说明'
		},
		{
			type: 'input',
			key: 'name',
			label: '文件名称'
		},
		{
			type: 'inputNumber',
			key: 'size',
			label: '文件大小',
			min: 0
		},
		{
			type: 'input',
			key: 'mimeType',
			label: '文件类型'
		},
		{
			type: 'textarea',
			key: 'remark',
			label: '备注'
		}
	]
	const formRules = {
		name: {
			required: true
		},
		size: {
			required: true
		},
		mimeType: {
			required: true
		}
	}

	const url = computed(() => {
		return nodeServer.value ? '/node-serve/bt-table-page' : '/testData/btTablePage.json'
	})
	const title = computed(() => {
		return action.value === 'new' ? '新增' : '编辑'
	})
	const method = computed(() => {
		return action.value === 'new' ? 'post' : 'put'
	})

	function dragDrop(a: any, b: any) {
		let d = btTab.value.dataS
		//提出a
		let t = d.splice(a, 1)
		//将a插到b后面
		d.splice(b, 0, ...t)
		nextTick(function () {
			btTab.value.dataS = d
		})
	}

	function clearSelect() {
		btTab.value.clearSelect()
	}

	function handleNew() {
		if (nodeServer.value) {
			action.value = 'new'
			formModalRef.value.open()
		} else {
			$swal('提示', '仅在node-serve模式下可执行新增', 'info')
		}
	}

	function handleSub(d: Record<string, any>) {
		if (d) {
			$fetch[method.value]('/node-serve/bt-table-page', d).then((r: any) => {
				if (r?.code === 0) {
					$swal(title.value + '成功', '', 'success')
					if (action.value === 'new') {
						search()
					} else {
						btTab.value.getDataAndClickRow(true)
					}
					formModalRef.value.close()
				} else {
					$swal(title.value + '失败', '', 'error')
				}
			})
		}
	}

	function getData() {
		nextTick(function () {
			btTab.value.getTableData()
		})
	}

	function getS() {
		console.log(btTab.value.getSelected())
		$swal('请在控制台查看已选数据', '', 'success')
	}

	function search(data?: Record<string, any>) {
		if (!data) {
			data = {}
		}
		searchData.value = cloneDeep(data)
	}

	function onRowClick(row: Record<string, any>, index: number) {
		console.log('row click-->', row, index)
	}

	function setTotal(d: any) {
		total.value = d?.total || d?.data?.total || 0
		tabData = d?.data?.records || d?.data || []
	}

	function handlePrint() {
		tablePrint.print(columns, tabData, '表格打印示例', { autoPrint: true })
	}
</script>

<template>
	<show-read-me />
	<NodeServeInfo />
	<div class="tableLK">
		<BtTablePage
			ref="btTab"
			:columns="columns"
			:url="url"
			:search-data="searchData"
			@on-row-click="onRowClick"
			@on-data-change="setTotal"
			show-top-row
			:radio="selectMode === 'radio'"
			:selection="selectMode === 'checkbox'"
			:draggable="true"
			use-page-pro
			@on-drag-drop="dragDrop"
		>
			<template #topMsg>共有：{{ total }} 条数据。</template>
			<template #topBtnGroup>
				<div class="topBoxKAQ">
					<RadioGroup v-model="selectMode" style="margin-right: 20px" @on-change="clearSelect">
						<Radio label="radio">单选</Radio>
						<Radio label="checkbox">多选</Radio>
					</RadioGroup>
					<Checkbox v-model="nodeServer" @on-change="getData">切换为node-serve数据(需开启项目nodeJs服务器)</Checkbox>
					<IconTxtBtn name="get select" icon="ios-checkbox" @click="getS" />
					<IconTxtBtn name="新增" icon="md-add" @click="handleNew" />
					<IconTxtBtn name="打印" icon="md-print" @click="handlePrint" />
				</div>
			</template>
		</BtTablePage>
	</div>
	<FormModal :title="title" ref="formModalRef" :form-data="formData" :form-rules="formRules" @on-submit="handleSub" />
</template>

<style scoped lang="less">
	.tableLK {
		height: calc(100vh - 100px);
		position: relative;
	}

	.topBoxKAQ {
		float: right;
	}
</style>
