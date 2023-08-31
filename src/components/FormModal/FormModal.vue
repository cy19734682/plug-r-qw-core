<!--created 2019.06.25-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<script lang="ts" setup>
	import t from '../../locale/i18nSFC'
	import Proxy from '../../methods/proxy'
	import { setTimeout } from '../../methods/timer'
	import FormR from '../FormR/FormR.vue'
	import type { FormItem } from '../../public'

	const emit = defineEmits(['on-close', 'on-open'])
	const props = withDefaults(
		defineProps<{
			title?: string /*弹框标题*/
			formData?: Array<FormItem | FormItem[]> /*弹框结构数据*/
			width?: number | string /*弹框宽度*/
			labelWidth?: number /*表单项标签宽度*/
			okBtTxt?: string /*确定按钮内容*/
			cancelBtTxt?: string /*取消按钮内容*/
			hideCancelBt?: boolean /*隐藏取消按钮（只显示确定按钮，点击确定关闭弹框，如“查看”弹框）*/
			hideFooter?: boolean /*隐藏底栏*/
			btnLoading?: boolean /*提交按钮显示loading*/
		}>(),
		{
			formData: () => [],
			width: 520,
			labelWidth: () => Proxy().formModalLabelWidth,
			hideCancelBt: false,
			hideFooter: false,
			btnLoading: false
		}
	)

	const formRRef = ref()
	const openModal = ref(false)
	const showLoading = ref(false)

	const formDataC = computed(() => {
		if (Array.isArray(props.formData[0])) {
			let t: any[] = []
			for (let f of props.formData) {
				t = t.concat(f.filter((e: any) => e.type === 'custom'))
			}
			return t
		}
		return props.formData.filter((e: any) => e.type === 'custom')
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
		/*设置表单项的值（公开，可添加新字段，例如添加隐藏字段，需要提交这个值，但页面不展示）*/
		formRRef.value.setItemToValGroup?.(data, notClearOthers)
	}

	function updateValGroup(data: Record<string, any>, notClearOthers: boolean) {
		/*更新表单项的值（公开，只能更新已有字段）*/
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
		if (val === undefined) {
			return
		}
		showLoading.value = Boolean(val)
		formRRef.value.changeLoading?.(showLoading.value)
	}

	function getValGroup() {
		/*获取用户已填数据，公开*/
		return formRRef.value.getValGroup?.()
	}

	function onSubmit() {
		/*响应提交事件提交数据，私有*/
		showLoading.value = true
	}

	function submit() {
		/*触发提交事件，公开*/
		if (props.hideCancelBt) {
			close()
		} else {
			formRRef.value.submit?.()
		}
	}

	function open() {
		/*触发打开弹框事件，公开*/
		openModal.value = true
	}

	function close() {
		/*触发关闭弹框事件，公开*/
		openModal.value = false
		setTimeout(() => {
			showLoading.value = false
			formRRef.value.changeLoading?.(false)
		}, 1000)
	}

	function handleVisibleChange(show: any) {
		/*弹框开关状况改变处理，私有*/
		if (!show) {
			emit('on-close')
		} else {
			emit('on-open')
		}
	}

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
		submit,
		open,
		close
	})
</script>

<template>
	<Modal
		class="formModal"
		:title="props.title || t('r.title')"
		v-model="openModal"
		:mask-closable="false"
		:footer-hide="props.hideFooter"
		:class="{ hideFooter: props.hideFooter }"
		:width="props.width"
		@on-visible-change="handleVisibleChange"
	>
		<form-r
			ref="formRRef"
			v-bind="$attrs"
			:form-data="props.formData"
			:label-width="props.labelWidth"
			:btnLoading="props.btnLoading"
			@on-submit="onSubmit"
		>
			<template #[item.slotName]="{ valGroup }" v-for="item in formDataC">
				<slot :name="item.slotName" :val-group="valGroup" />
			</template>
		</form-r>
		<template #footer>
			<Button @click="submit" class="modal-save-btn" :loading="props.btnLoading && showLoading">{{
				props.okBtTxt || t('r.confirm')
			}}</Button>
			<Button @click="close" class="modal-cancel-btn" v-if="!props.hideCancelBt">{{
				props.cancelBtTxt || t('r.cancel')
			}}</Button>
		</template>
	</Modal>
</template>
