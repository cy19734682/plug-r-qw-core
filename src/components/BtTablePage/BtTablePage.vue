<!--BtTablePage 表格-页签-表顶操作（如：批量XX，导出）集成UI组件
@created 2023.08.15
@author Ricky email:zhangqingcq@foxmail.com-->

<script lang="ts" setup>
	import { toLine, tooltipManual } from '../../methods/globalFunc'
	import { toHump } from '../../methods/needImportFunc'
	import $fetch from '../../methods/fetch.js'
	import { cloneDeep, isBoolean, isNumber } from 'lodash-es'
	import { setTimeout } from '../../methods/timer'
	import { TableColumnConfig, Radio } from 'view-ui-plus'
	import { h } from 'vue'

	const { globalProperties } = getCurrentInstance()!.appContext!.config

	const emit = defineEmits(['on-selection-change', 'on-data-change'])

	let tc: { showSettingCheck?: boolean; disableShowSetting?: boolean } = {
		showSettingCheck: false,
		disableShowSetting: false
	}

	const TableColumnR = { ...tc, ...TableColumnConfig }

	const props = withDefaults(
		defineProps<{
			url?: string /*表格拉取数据的接口地址*/
			searchData?: Record<string, any> /*表格条件查询数据*/
			columns?: Array<typeof TableColumnR> /*表格表头结构数据，同view-ui-plus*/
			dataHandler?: (d: any) => {
				data: Record<string, any>
				total: number
				[k: keyof any]: any
			} /*接口数据处理方法，处理后格式须为{data:[...],total:xx}*/
			selection?: boolean /*是否展示每列开头选择框*/
			radio?: boolean /*表格是否是单选表格，每次只能选中一行*/
			selectionFixed?: 'left' | 'right' | false /*每列开头选择框固定*/
			rowClickSelect?: boolean /*是否点击行操作开头选择框*/
			data?: any[] /*表格默认数据，没有url的本地静态表格使用*/
			pageSize?: number /*每页条数*/
			sortable?: 'custom' | '' /*排序模式*/
			initData?: boolean /*初始化数据，即组件创建后自动拉取第一次数据*/
			highlightRow?: boolean /*高亮当前行*/
			rowClickNum?: number /*自动拉取第一次数据时点击第几行，默认-1，不点击*/
			tableEmptyTdHandle?: boolean /*表格内容为空是否显示为‘--’*/
			noBorderTable?: boolean /*表格无边框*/
			noPage?: boolean /*表格页签*/
			orderDefault?: 'asc' | 'desc' /*排序是升是降*/
			orderKey?: string /*排序的key*/
			orderKeyFormat?: 'underline' | 'camelcase' /*排序key的格式*/
			getDataLoading?: boolean /*拉取表格数据时显示遮罩层*/
			showTopRow?: boolean /*展示顶行（列表设置、批量操作按钮、导出等按钮、统计信息等）,各项子内容通过slot接入*/
			lightHead?: boolean /*浅色背景表头，避免和headerBar菜单紧邻时页面局部颜色不平衡*/
			pageComponentSize?: 'small' | 'default' /*页签大小*/
			noElevator?: boolean /*页签不带电梯*/
		}>(),
		{
			url: '',
			searchData: () => ({}),
			columns: () => [],
			selection: false,
			radio: false,
			selectionFixed: false,
			rowClickSelect: true,
			data: () => [],
			pageSize: 10,
			sortable: '',
			initData: true,
			highlightRow: false,
			rowClickNum: -1,
			tableEmptyTdHandle: false,
			noBorderTable: false,
			noPage: false,
			orderDefault: 'desc',
			orderKey: 'id',
			orderKeyFormat: 'underline',
			getDataLoading: false,
			showTopRow: false,
			lightHead: false,
			pageComponentSize: 'default',
			noElevator: false
		}
	)

	const pageSizes = globalProperties.pageSizes || [10, 20, 30, 40]
	const dataT = ref(props.data)
	const pageSizeT = ref<number>(
		(localStorage.getItem('btPageSize') && Number(localStorage.getItem('btPageSize'))) || props.pageSize
	)
	const current = ref(1)
	const total = ref(0)
	let selected: Record<string, any>[] = []
	let currentKey: string | null
	let currentIndex: number | null
	let _key: string = props.orderKey
	let _order: string = props.orderDefault
	const tableContainerHeight = 300

	const columnsFixed = computed(() => {
		for (let e of props.columns) {
			if (e.fixed) {
				return true
			}
		}
		return false
	})

	const fixedTable = computed(() => props.selectionFixed || columnsFixed.value)

	const queryData = computed(() => {
		let t: Record<string, any> = {
			...props.searchData,
			current: current.value,
			size: pageSizeT.value
		}
		if (props.sortable === 'custom') {
			if (props.orderKeyFormat === 'underline') {
				t[_order] = toLine(_key)
			} else if (props.orderKeyFormat === 'camelcase') {
				t[_order] = toHump(_key)
			}
		}
		return t
	})

	const columnsT = computed(() => {
		let t = props.columns.filter((e) => {
			return e.type !== 'selection'
		})
		if (props.selection || props.radio) {
			let c: Record<string, any>
			if (props.radio) {
				c = {
					title: ' ',
					width: 65,
					render: (_h: any, params: Record<string, any>) => {
						return h(Radio, {
							value: params.row.btChecked
						})
					}
				}
			} else {
				c = {
					type: 'selection',
					width: 60
				}
			}

			if (props.selectionFixed) {
				c.fixed = props.selectionFixed
			}
			t.unshift(c)
		}
		t.forEach((e) => {
			if (props.sortable === 'custom') {
				if (e.key && e.sortable !== true && e.sortable !== false) {
					e.sortable = 'custom'
				}
			} else {
				e.sortable = false
			}
			if (!e.align) {
				e.align = 'center'
			}
		})
		if (props.tableEmptyTdHandle) {
			t.forEach((e: Record<string, any>) => {
				if (e.key && e.render === undefined) {
					if (e.tooltip) {
						e.render = tooltipManual(e.key, true)
					} else {
						e.render = (h: any, params: Record<string, any>) => {
							let td = params.row[e.key]
							return h('span', td === '' || td === null || td === undefined ? '--' : td)
						}
					}
				}
			})
		}
		return t
	})

	const dataS = computed({
		get() {
			return dataT.value.map((e: Record<string, any>, i: number) => {
				return {
					btKey: 'bt-' + i,
					btChecked: false,
					...e
				}
			})
		},
		set(v: any) {
			dataT.value = v
		}
	})

	const selectedIds = computed(() => selected.map((e: Record<string, any>) => e.id))

	const selectedKeys = computed(() => selected.map((e: Record<string, any>) => e.btKey))

	const tableRef = ref()

	watch(() => props.searchData, search, { deep: true })

	function search() {
		/*私有*/
		current.value = 1
		getDataAndClickRow()
	}

	function initTable() {
		/*私有*/
		if (props.initData) {
			getDataAndClickRow()
		}
	}

	function addRow(row: Record<string, any>) {
		/*添加行（公开），分页时不推荐使用，详细见说明文档*/
		dataT.value.unshift(cloneDeep(row))
		setTimeout(() => {
			tableRef.value?.clickCurrentRow?.(0)
		}, 100)
	}

	function setRowData(row: Record<string, any>, setCurrentRow: boolean, clickCurrentRow: boolean) {
		/*更新行数据（公开）*/
		let index: number | null = null
		if (isBoolean(setCurrentRow) && setCurrentRow) {
			index = currentIndex
		} else if (isNumber(setCurrentRow)) {
			index = setCurrentRow
		}
		if (index !== null) {
			let t = dataT.value[index]
			for (let key in row) {
				if (row.hasOwnProperty(key)) {
					t[key] = row[key]
				}
			}
			if (clickCurrentRow) {
				setTimeout(() => {
					tableRef.value?.clickCurrentRow?.(index)
				}, 10)
			}
		}
	}

	function deleteRow(index: number) {
		/*根据索引数字删除行（公开），分页时不推荐使用，详细见说明文档*/
		dataT.value.splice(index, 1)
		setTimeout(() => {
			tableRef.value?.clickCurrentRow?.(0)
		}, 100)
	}

	function onRowClick(row: Record<string, any>, i: number) {
		/*私有*/
		if (row.btChecked && props.radio) {
			return
		}
		if ((props.selection || props.radio) && props.rowClickSelect) {
			tableRef.value?.toggleSelect?.(i)
		}
	}

	function onSelect(s: any, row: Record<string, any>) {
		/*私有*/
		currentKey = row.btKey
		currentIndex = Number(row.btKey.split('-')[1])
		if (props.radio) {
			dataT.value[currentIndex].btChecked = true
		}
	}

	function selectionHandle(selection: any) {
		/*私有*/
		if (props.radio) {
			for (let e of dataS.value) {
				if (e.btKey !== currentKey) {
					dataT.value[Number(e.btKey.split('-')[1])].btChecked = false
				}
			}
		}
		selected = selection
		emit('on-selection-change', selection)
	}

	function getSelected() {
		/*获取已选行数据（公开）*/
		return cloneDeep(selected)
	}

	function changePage(v: number) {
		/*私有*/
		current.value = v
		getDataAndClickRow()
	}

	function pageSizeChange(v: number) {
		/*私有*/
		pageSizeT.value = v
		localStorage.setItem('btPageSize', String(v))
		if (current.value === 1) {
			getDataAndClickRow()
		}
	}

	function onSortChange({ key, order }: { key: string; order: string }) {
		/*表头排序(私有)*/
		if (_order === 'normal') {
			/*恢复到默认页面排序*/
			_key = props.orderKey
			_order = props.orderDefault
		} else {
			_key = key
			_order = order
		}
		current.value = 1
		getTableData()
	}

	function clearSelect() {
		/*清空选择（公开）*/
		if (props.radio) {
			if (selectedKeys.value.length > 0 && dataS.value.length > 0) {
				let i = selectedKeys.value[0].split('-')[1]
				dataS.value[i].btChecked = false
			}
		} else {
			tableRef.value?.selectAll?.(false)
		}
		if (selected.length > 0) {
			selected = []
			emit('on-selection-change', [])
		}
		currentKey = null
		currentIndex = null
	}

	function clearTableData() {
		/*清空选择（公开）,用于特殊场景下重置表格，不拉取数据，如需刷新数据直接调用getTableData*/
		dataT.value = []
		clearSelect()
		current.value = 1
		total.value = 0
	}

	function getTableData(order?: string, orderKey?: string, keepSelect?: boolean) {
		/*拉取表格数据（公开）*/
		return new Promise((resolve) => {
			if (order) {
				_order = order
			}
			if (orderKey) {
				_key = orderKey
			}
			if (props.url) {
				$fetch
					.get(props.url, queryData.value, '', [], { spin: props.getDataLoading })
					.then((d: any) => {
						let r: Record<string, any>
						if (!keepSelect) {
							clearSelect()
						}
						if (typeof props.dataHandler === 'function') {
							r = props.dataHandler(d)
						} else {
							r = d
						}
						if (r.data) {
							/*接口返回数据为空时可能是用null表示，所以有下面逻辑*/
							if (r.data.records || r.data.records === null) {
								dataT.value = r.data.records || []
							} else if (r.data.page) {
								if (r.data.page.records || r.data.page.records === null) {
									dataT.value = r.data.page.records || []
								}
							} else if (r.data.data) {
								if (r.data.data.records || r.data.data.records === null) {
									dataT.value = r.data.data.records || []
								}
							} else {
								dataT.value = r.data
							}
							total.value = r.data.page?.total || r.data.data?.total || r.data.total || r.total || 0
							if (total.value === 0 && current.value > 1 && dataT.value && dataT.value.length === 0) {
								/*如果没有数据，将当前页置为1*/
								current.value = 1
							} else if (current.value > 1 && total.value <= (current.value - 1) * pageSizeT.value) {
								/*当前页并没有数据，自动拉取前一页数据*/
								current.value--
								nextTick(function () {
									getTableData(order, orderKey)
								})
							}
							emit('on-data-change', r)
							resolve(r)
						} else {
							console.warn('请求返回数据有误，无法使用')
							clearTableData()
							emit('on-data-change', r)
						}
					})
					.catch((e) => {
						console.warn(e)
						clearSelect()
						clearTableData()
						emit('on-data-change', e)
					})
			} else {
				console.warn('没有有效的请求地址，无法获取表格数据')
			}
		})
	}

	function getDataAndClickRow(clickCurrentRow?: boolean, order?: string, orderKey?: string) {
		/*单选模式时（非单选模式只拉数据不点击），拉取表格数据并且点击行，如果传true，则点击当前行，不传则点击 rowClickNum 指定行（公开）*/
		if (props.radio && (clickCurrentRow || props.rowClickNum !== -1)) {
			getTableData(order, orderKey, clickCurrentRow).then(() => {
				//点击对应行
				if (dataT.value.length > 0) {
					setTimeout(() => {
						if (clickCurrentRow) {
							tableRef.value?.clickCurrentRow?.(currentIndex || 0)
						} else {
							tableRef.value?.clickCurrentRow?.(props.rowClickNum)
						}
					}, 10)
				}
			})
		} else {
			getTableData()
		}
	}

	onMounted(initTable)

	defineExpose({
		selectedIds,
		addRow,
		setRowData,
		deleteRow,
		getSelected,
		clearSelect,
		clearTableData,
		getTableData,
		getDataAndClickRow
	})
</script>

<template>
	<div class="btTablePage fullHeight flexColumnBox" ref="tableBox">
		<div class="topBtn" v-show="props.showTopRow">
			<slot name="tableSetting" />

			<slot name="topMsg" />

			<slot name="topBtnGroup" />
		</div>
		<div class="tableContainer growFlexItem">
			<div class="fullHeight relativeBox">
				<div ref="tableContainerLOI" class="fullFlowContent">
					<Table
						ref="tableRef"
						v-bind="$attrs"
						:height="(fixedTable && tableContainerHeight) || null"
						:class="{ noBorderTable: props.noBorderTable, fullHeightTable: !fixedTable, lightHeadO: props.lightHead }"
						:columns="columnsT"
						:data="dataS"
						:highlight-row="props.radio || props.highlightRow"
						@on-select="onSelect"
						@on-selection-change="selectionHandle"
						@on-sort-change="onSortChange"
						@on-row-click="onRowClick"
					/>
				</div>
			</div>
		</div>
		<div class="pageContainer" v-show="!props.noPage">
			<Page
				v-model="current"
				:page-size-opts="pageSizes"
				:total="total"
				:page-size="pageSizeT"
				show-sizer
				show-total
				:showElevator="!props.noElevator"
				:size="props.pageComponentSize"
				@on-change="changePage"
				@on-page-size-change="pageSizeChange"
			/>
		</div>
	</div>
</template>
