<script setup lang="ts">
	import { Checkbox } from 'view-ui-plus'
	import { downloadFileReaderFile, BtTablePage, TableSetting } from '../../src'
	import imgK from '../assets/testImg.png'
	import ShowReadMe from '@/components/ShowReadMe.vue'
	import NodeServeInfo from '@/components/NodeServeInfo.vue'

	const btTab = ref()
	const nodeServer = ref(false)
	const searchData = ref<Record<string, any>>({})
	const columns = shallowRef([
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
				return _h(
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
			minWidth: 120,
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
		}
	])

	const url = computed(() => {
		return nodeServer.value ? '/node-serve/bt-table-page' : '/testData/btTablePage.json'
	})

	function getData() {
		nextTick(function () {
			btTab.value.getTableData()
		})
	}

	function onRowClick(row: Record<string, any>, index: number) {
		console.log('row click-->', row, index)
	}
</script>

<template>
	<show-read-me />
	<div class="flexColumnBox">
		<NodeServeInfo />
		<div class="growFlexItem">
			<BtTablePage
				ref="btTab"
				:columns="columns"
				:url="url"
				:search-data="searchData"
				@on-row-click="onRowClick"
				showTopRow
				border
			>
				<template #topBtnGroup>
					<div class="topBoxKAQ">
						<Checkbox v-model="nodeServer" @on-change="getData">切换为node-serve数据(需开启项目nodeJs服务器)</Checkbox>
						<TableSetting v-model="columns" s-key="table_setting_ex_202405071140" transfer />
					</div>
				</template>
			</BtTablePage>
		</div>
	</div>
</template>

<style scoped lang="less">
	.topBoxKAQ {
		float: right;
		overflow: hidden;
	}
</style>
