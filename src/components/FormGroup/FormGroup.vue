<!--FormGroup 表单群组件，表单相关用法参考FormR,组件自带确定和取消按钮
@created 2023.08.30
@author Ricky email:zhangqingcq@foxmail.com-->

<script lang="ts" setup>
	import FormR from '../FormR/FormR.vue'
	import t from '../../locale/i18nSFC'
	import { setTimeout } from '../../methods/timer'
	import type { FormItem } from '../../public'
	import Proxy from '../../methods/proxy'

	const emit = defineEmits(['on-cancel'])
	const props = withDefaults(
		defineProps<{
			formData?: Array<FormItem | FormItem[]>
			with?: string
			labelWidth?: number
			contentWidth?: string
			itemWidth?: number
			showOkBt?: boolean
			showCancelBt?: boolean
			okBtTxt?: string
			cancelBtTxt?: string
			btnLoading?: boolean
		}>(),
		{
			formData: () => [],
			with: '100%',
			labelWidth: () => Proxy().formGroupLabelWidth,
			contentWidth: '70%',
			itemWidth: 200,
			showOkBt: true,
			showCancelBt: true,
			btnLoading: false
		}
	)

	const formGroupStyle = ref({ width: props.with })
	const showLoading = ref(false)
	const formRRef = ref()
	const formDataC = computed(() => {
		if (Array.isArray(props.formData)) {
			if (Array.isArray(props.formData[0])) {
				let t: any[] = []
				for (let f of props.formData) {
					t = t.concat(f.filter((e: any) => e.type === 'custom' || e.type === 'input' && e.slotName && e.slotPosition))
				}
				return t
			} else {
				return props.formData.filter((e: any) => e.type === 'custom' || e.type === 'input' && e.slotName && e.slotPosition)
			}
		}
		return []
	})

	function resetForm() {
		/*重置表单，会清空表单值并刷新表单dom，异步方法，公开*/
		return new Promise((resolve) => {
			formRRef.value.resetForm?.().then((r: any) => {
				resolve(r)
			})
		})
	}

	function refreshFormDom() {
		/*刷新表单dom，公开*/
		return new Promise((resolve) => {
			formRRef.value.refreshFormDom?.().then((r: any) => {
				resolve(r)
			})
		})
	}

	function reRenderForm() {
		/*重新渲染表单，异步方法（公开）*/
		return new Promise((resolve) => {
			formRRef.value.reRenderForm?.().then((r: any) => {
				resolve(r)
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
		/*改变确定按钮loading状态，私有*/
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
		formRRef.value.submit?.()
	}

	function close() {
		/*触发取消按钮点击事件，公开*/
		emit('on-cancel')
		setTimeout(() => {
			showLoading.value = false
			formRRef.value.changeLoading?.(false)
		}, 1000)
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
		close
	})
</script>

<template>
	<div :style="formGroupStyle" class="formGroupBoxVM">
		<form-r
			ref="formRRef"
			v-bind="$attrs"
			:form-data="props.formData"
			:label-width="props.labelWidth"
			:content-width="props.contentWidth"
			:item-width="props.itemWidth"
			:btnLoading="props.btnLoading"
			@on-submit="onSubmit"
		>
			<template #[item.slotName]="{ valGroup }" v-for="item in formDataC">
				<slot :name="item.slotName" :val-group="valGroup" />
			</template>
		</form-r>
		<div
			class="formFooterVM"
			v-show="props.showOkBt || props.showCancelBt"
			:style="{ marginLeft: props.labelWidth + 'px' }"
		>
			<div :style="{ width: props.contentWidth }" class="btnBoxKAL">
				<Button
					@click="submit"
					class="form-save-btn"
					v-if="props.showOkBt"
					:loading="props.btnLoading && showLoading"
					>{{ props.okBtTxt || t('r.confirm') }}</Button
				>
				<Button @click="close" class="form-cancel-btn" v-if="props.showCancelBt">{{
					props.cancelBtTxt || t('r.cancel')
				}}</Button>
			</div>
		</div>
	</div>
</template>
