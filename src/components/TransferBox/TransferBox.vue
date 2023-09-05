<!--TransferBox 穿梭框，左右两套由筛选表单-表格-页签集成的UI组件之间的数据穿梭，左右表格数据皆来自接口，穿梭时自动请求接口，然后自动刷新数据
@created 2023.09.04
@author Ricky email:zhangqingcq@foxmail.com-->
<script lang="ts" setup>
	import { isEmpty } from 'lodash-es'
	import t from '../../locale/i18nSFC'
	import $fetch from '../../methods/fetch'
	import $swal from '../../methods/swal'
	import ShowHidePanel from '../ShowHidePanel/ShowHidePanel.vue'
	import SearchForm from '../SearchForm/SearchForm.vue'
	import BtTablePage from '../BtTablePage/BtTablePage.vue'

	const emit = defineEmits(['transferred'])
	const props = withDefaults(
		defineProps<{
			titleLeft?: string
			titleRight?: string
			formDataLeft?: any[]
			formDataRight?: any[]
			formRulesLeft?: Record<string, any>
			formRulesRight?: Record<string, any>
			constSearchDataLeft?: Record<string, any>
			constSearchDataRight?: Record<string, any>
			leftTableColumns?: any[]
			rightTableColumns?: any[]
			leftTableUrl?: string
			rightTableUrl?: string
			addUrl?: string
			deleteUrl?: string
			addAllUrl?: string
			deleteAllUrl?: string
			addParamsHandle?: (d: any) => any
			deleteParamsHandle?: (d: any) => any
			addAllParamsHandle?: (d: any) => any
			deleteAllParamsHandle?: (d: any) => any
			addMethod?: 'post' | 'put' | 'get'
			addAllMethod?: 'post' | 'put' | 'get'
			deleteMethod?: 'delete' | 'post' | 'put' | 'get'
			deleteAllMethod?: 'delete' | 'post' | 'put' | 'get'
			searchFormLabelWith?: number
		}>(),
		{
			formDataLeft: () => [],
			formDataRight: () => [],
			formRulesLeft: () => ({}),
			formRulesRight: () => ({}),
			constSearchDataLeft: () => ({}),
			constSearchDataRight: () => ({}),
			leftTableColumns: () => [],
			rightTableColumns: () => [],
			addParamsHandle: (selection: any[]) => selection.map((e: any) => e.id),
			deleteParamsHandle: (selection: any[]) => selection.map((e: any) => e.id),
			addAllParamsHandle: (searchData: Record<string, any>) => searchData,
			deleteAllParamsHandle: (searchData: Record<string, any>) => searchData,
			addMethod: 'post',
			addAllMethod: 'post',
			deleteMethod: 'delete',
			deleteAllMethod: 'delete'
		}
	)

	let searchDataLeft = ref<Record<string, any>>({})
	let searchDataRight = ref<Record<string, any>>({})
	let lSelection = ref<any[]>([])
	let rSelection = ref<any[]>([])
	let leftTotal = ref(0)
	let rightTotal = ref(0)

	const leftTableSearchData = computed(() => ({ ...props.constSearchDataLeft, ...searchDataLeft.value }))
	const rightTableSearchData = computed(() => ({ ...props.constSearchDataRight, ...searchDataRight.value }))
	const delAllDis = computed(() => leftTotal.value < 1)
	const deleteDis = computed(() => lSelection.value.length < 1)
	const addDis = computed(() => rSelection.value.length < 1)
	const addAllDis = computed(() => rightTotal.value < 1)

	const leftFormRef = ref()
	const rightFormRef = ref()
	const lTabRef = ref()
	const rTabRef = ref()

	/*重置穿梭框（公开）*/
	function reset() {
		leftFormRef.value.resetForm()
		rightFormRef.value.resetForm()
		if (!isEmpty(searchDataLeft.value)) {
			searchDataLeft.value = {}
		}
		if (!isEmpty(searchDataRight.value)) {
			searchDataRight.value = {}
		}
		lTabRef.value.clearSelect()
		rTabRef.value.clearSelect()
	}

	/*主动触发筛选/刷新数据（公开）*/
	function search() {
		lTabRef.value.search()
		rTabRef.value.search()
	}

	/*私有*/
	function lSelectionChange(s: any) {
		lSelection.value = s
	}

	/*私有*/
	function rSelectionChange(s: any) {
		rSelection.value = s
	}

	/*私有*/
	function dataChangeL(d: Record<string, any>) {
		leftTotal.value = d?.data?.page?.total || d?.data?.data?.total || d?.data?.total || d?.total || 0
	}

	/*私有*/
	function dataChangeR(d: Record<string, any>) {
		rightTotal.value = d?.data?.page?.total || d?.data?.data?.total || d?.data?.total || d?.total || 0
	}

	/*私有*/
	function searchLeft(d: any) {
		searchDataLeft.value = d
	}

	/*私有*/
	function searchRight(d: any) {
		searchDataRight.value = d
	}

	/*私有*/
	function add() {
		if (props.addUrl) {
			fetchX('add')
		}
	}

	/*私有*/
	function remove() {
		if (props.deleteUrl) {
			fetchX('delete')
		}
	}

	/*私有*/
	function addAll() {
		if (props.addAllUrl && props.addUrl) {
			fetchX('addAll')
		}
	}

	/*私有*/
	function removeAll() {
		if (props.deleteAllUrl) {
			fetchX('deleteAll')
		}
	}

	/*私有*/
	function fetchX(action: 'add' | 'delete' | 'addAll' | 'deleteAll') {
		let method
		let url
		let data: Record<string, any> = {}
		let msg = ''
		switch (action) {
			case 'add':
				method = props.addMethod
				url = props.addUrl
				data = props.addParamsHandle(rSelection.value)
				msg = t('r.add')
				break
			case 'delete':
				method = props.deleteMethod
				url = props.deleteUrl
				data = props.deleteParamsHandle(lSelection.value)
				msg = t('r.remove')
				break
			case 'addAll':
				method = props.addAllMethod
				url = props.addAllUrl
				data = props.addAllParamsHandle(rightTableSearchData.value)
				msg = t('r.addAll')
				break
			case 'deleteAll':
				method = props.deleteAllMethod
				url = props.deleteAllUrl
				data = props.deleteAllParamsHandle(leftTableSearchData.value)
				msg = t('r.removeAll')
				break
		}
		if (url && method) {
			$fetch[method](url, data, null, [], { spin: true }, false)
				.then((r: any) => {
					if (r?.code === 0) {
						$swal(msg + t('r.success'), r?.message || '', 'success')
						if (lTabRef.value) {
							lTabRef.value.getTableData()
						}
						if (rTabRef.value) {
							rTabRef.value.getTableData()
						}
						emit('transferred')
					} else {
						$swal(msg + t('r.failed'), r?.message || '', 'error')
					}
				})
				.catch(() => {
					$swal(msg + t('r.error'), '', 'error')
				})
		}
	}

	defineExpose({
		reset,
		search
	})
</script>

<template>
	<div class="transferBoxRL">
		<div class="leftBoxLLL">
			<div class="fullHeight flexColumnBox">
				<div class="notGrow">
					<div class="titleLLL">{{ props.titleLeft || t('r.added') }}</div>
					<show-hide-panel>
						<search-form
							ref="leftFormRef"
							:form-data="props.formDataLeft"
							:form-rules="props.formRulesLeft"
							:label-width="props.searchFormLabelWith"
							@on-search="searchLeft"
						/>
					</show-hide-panel>
				</div>

				<div class="growFlexItem">
					<bt-table-page
						ref="lTabRef"
						:columns="props.leftTableColumns"
						:url="props.leftTableUrl"
						:search-data="leftTableSearchData"
						@on-selection-change="lSelectionChange"
						@on-data-change="dataChangeL"
						:init-data="Boolean(isEmpty(props.constSearchDataLeft) && props.leftTableUrl)"
						get-data-loading
						selection
					/>
				</div>
			</div>
		</div>

		<div class="middleBoxLLL">
			<Button class="middleBtLLL" size="large" type="default" @click="removeAll" :disabled="delAllDis"
				>{{ t('r.removeAll') }}
				<Icon type="ios-arrow-forward" />
			</Button>
			<Button class="middleBtLLL" size="large" type="default" @click="remove" :disabled="deleteDis"
				>{{ t('r.remove') }}
				<Icon type="ios-arrow-forward" />
			</Button>
			<Button class="middleBtLLL" size="large" type="primary" @click="add" :disabled="addDis">
				<Icon type="ios-arrow-back" />
				{{ t('r.add') }}</Button
			>
			<Button class="middleBtLLL" size="large" type="primary" @click="addAll" :disabled="addAllDis">
				<Icon type="ios-arrow-back" />
				{{ t('r.addAll') }}</Button
			>
		</div>

		<div class="rightBoxLLL">
			<div class="fullHeight flexColumnBox">
				<div class="notGrow">
					<div class="titleLLL">{{ props.titleRight || t('r.notAdded') }}</div>

					<show-hide-panel>
						<search-form
							ref="rightFormRef"
							:form-data="props.formDataRight"
							:form-rules="props.formRulesRight"
							:label-width="props.searchFormLabelWith"
							@on-search="searchRight"
						/>
					</show-hide-panel>
				</div>

				<div class="growFlexItem">
					<bt-table-page
						ref="rTabRef"
						:columns="props.rightTableColumns"
						:url="props.rightTableUrl"
						:search-data="rightTableSearchData"
						@on-selection-change="rSelectionChange"
						@on-data-change="dataChangeR"
						:init-data="Boolean(isEmpty(props.constSearchDataRight) && props.rightTableUrl)"
						get-data-loading
						selection
					/>
				</div>
			</div>
		</div>
	</div>
</template>
