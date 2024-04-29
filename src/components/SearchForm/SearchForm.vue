<!--SearchForm 页面条件查询表单（行内）组件，一般配合btTablePage组件使用，自带查询按钮和清空按钮，用户只需要监听on-search事件取得表单采集的数据进行处理即可
@created 2023.08.31
@author Ricky email:zhangqingcq@foxmail.com-->

<script lang="ts" setup>
	import FormR from '../FormR/FormR.vue'
	import t from '../../locale/i18nSFC'
	import Proxy from '../../utils/proxy'
	import type { FormItem } from '../../public'

	const emit = defineEmits(['on-search'])
	const props = withDefaults(
		defineProps<{
			formData?: Array<FormItem | FormItem[]> /*搜索表单结构数据*/
			labelWidth?: number /*表单项标签宽度*/
			itemWidth?: number /*表单项内容宽度,用于行内表单*/
			showInlineOkBt?: boolean /*显示搜索按钮*/
			showInlineClearBt?: boolean /*显示清空按钮*/
		}>(),
		{
			formData: () => [],
			labelWidth: () => Proxy().searchFormLabelWidth,
			itemWidth: () => Proxy().searchFormItemWidth,
			showInlineOkBt: true,
			showInlineClearBt: true
		}
	)

	const formRRef = ref()

	const formDataC = computed(() => {
		if (Array.isArray(props.formData[0])) {
			let t: any[] = []
			for (let f of props.formData) {
				t = t.concat(f.filter((e: any) => e.type === 'custom' || (e.type === 'input' && e.slotName && e.slotPosition)))
			}
			return t
		}
		return props.formData.filter(
			(e: any) => e.type === 'custom' || (e.type === 'input' && e.slotName && e.slotPosition)
		)
	})

	function resetForm() {
		/*重置表单，会清空表单值并刷新表单dom，异步方法，公开*/
		return new Promise((resolve: any) => {
			formRRef.value.resetForm?.().then(() => {
				resolve()
			})
		})
	}

	function refreshFormDom() {
		/*刷新表单dom，公开*/
		return new Promise((resolve: any) => {
			formRRef.value.refreshFormDom?.().then(() => {
				resolve()
			})
		})
	}

	function reRenderForm() {
		/*重新渲染表单，异步方法（公开）*/
		return new Promise((resolve: any) => {
			formRRef.value.reRenderForm?.().then(() => {
				resolve()
			})
		})
	}

	function setItemToValGroup(data: Record<string, any>, notClearOthers: boolean) {
		/*设置表单项的值（可添加新字段，例如添加隐藏字段，需要提交这个值，但页面不展示），公开*/
		formRRef.value.setItemToValGroup?.(data, notClearOthers)
	}

	function updateValGroup(data: Record<string, any>, notClearOthers: boolean) {
		/*更新表单项的值（只能更新已有字段），公开*/
		formRRef.value.updateValGroup?.(data, notClearOthers)
	}

	function updateFormDataT(data: Record<string, any> | Record<string, any>[]) {
		/*更新表单结构，例如设置或取消禁用，公开*/
		formRRef.value.updateFormDataT?.(data)
	}

	function validate() {
		/*验证表单，公开*/
		formRRef.value.validate?.()
	}

	function reValidate(prop: any) {
		/*手动验证表单项（公开）*/
		formRRef.value.reValidate?.(prop)
	}

	function changeLoading(val: any) {
		/*改变弹框loading状态，私有*/
		formRRef.value.changeLoading?.(val === undefined ? false : val)
	}

	function getValGroup() {
		/*获取用户已填数据，公开*/
		return formRRef.value.getValGroup?.()
	}

	function onSubmit(data: any) {
		/*响应提交事件提交数据，私有*/
		emit('on-search', data)
	}

	function submit() {
		/*触发提交事件，公开*/
		formRRef.value.submit?.()
	}

	onMounted(() => {
		const el = formRRef.value.$el
		if (el?.parentNode) {
			el.parentNode.addEventListener('keyup', (e: any) => {
				if (e.keyCode === 13) {
					//回车
					submit()
				}
			})
		}
	})

	defineExpose({
		resetForm,
		refreshFormDom,
		reRenderForm,
		setItemToValGroup,
		updateValGroup,
		updateFormDataT,
		validate,
		reValidate,
		changeLoading,
		getValGroup,
		submit
	})
</script>

<template>
	<form-r
		ref="formRRef"
		v-bind="$attrs"
		:form-data="props.formData"
		:label-width="props.labelWidth"
		:item-width="props.itemWidth"
		inline
		:show-long-ok-bt="false"
		:show-inline-ok-bt="props.showInlineOkBt"
		:inline-ok-bt-txt="t('r.check')"
		:show-inline-clear-bt="props.showInlineClearBt"
		:show-message="false"
		@on-submit="onSubmit"
	>
		<template #[item.slotName]="{ valGroup }" v-for="item in formDataC">
			<slot :name="item.slotName" :val-group="valGroup" />
		</template>
	</form-r>
</template>
