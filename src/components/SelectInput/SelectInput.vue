<!--SelectInput 下拉选择和输入框组合，select选择要输入的key,input输入val
@created 2023.08.16
@author Ricky email:zhangqingcq@foxmail.com-->

<script lang="ts" setup>
	import { debounce } from 'lodash-es'
	import t from '../../locale/i18nSFC'

	const emit = defineEmits(['update:modelValue', 'on-change'])
	const props = withDefaults(
		defineProps<{
			modelValue?: Record<string, any> /*组件的值，建议使用v-model绑定，key对应select值，val对应input值*/
			labelWidth?: number /*表单项标签宽度*/
			labelTextAlign?: 'left' | 'center' | 'right' /*select内容对齐方式*/
			itemWidth?: number /*表单项内容宽度,用于行内表单*/
			selectOption?: any[] /*选择框待选项*/
			placeholder?: string
			clearable?: boolean
			disabled?: boolean /*禁用，仅展示*/
		}>(),
		{
			modelValue: () => ({
				key: null,
				val: null
			}),
			labelWidth: 160,
			labelTextAlign: 'right',
			itemWidth: 200,
			selectOption: () => [],
			clearable: false,
			disabled: false
		}
	)

	const selectVal = computed({
		get() {
			return (props.modelValue && props.modelValue.key) || null
		},
		set(v: any) {
			let temp: Record<string, any> = {
				key: v,
				val: null
			}
			if (selectVal.value && selectVal.value !== v) {
				temp.beforeKey = selectVal.value
			}
			emit('update:modelValue', temp)
			emit('on-change', temp)
		}
	})

	const inputVal = computed({
		get() {
			return (props.modelValue && props.modelValue.val) || null
		},
		set(v: any) {
			emit('update:modelValue', {
				key: selectVal.value,
				val: v
			})
		}
	})

	const labelSelectStyle = computed(() => ({
		width: props.labelWidth + 'px',
		textAlign: props.labelTextAlign
	}))

	const inputStyle = computed(() => ({ width: props.itemWidth + 'px' }))

	function inputChange(e: Record<string, any>) {
		if (e?.target && e.target.value !== undefined) {
			handleChange({
				key: selectVal.value,
				val: e.target.value
			})
		}
	}

	const handleChange = debounce((data) => {
		emit('on-change', data)
	}, 500)
</script>

<template>
	<div>
		<Select v-model="selectVal" :style="labelSelectStyle" :disabled="Boolean(props.disabled)" transfer>
			<Option
				v-for="(item, index) in props.selectOption"
				:value="item?.val"
				:label="item?.label"
				:key="'selectInputOp' + item?.value + index"
				:style="{ textAlign: props.labelTextAlign }"
			/>
		</Select>
		<Input
			v-model="inputVal"
			:placeholder="props.placeholder || t('r.pInput')"
			:style="inputStyle"
			:clearable="props.clearable"
			:disabled="Boolean(props.disabled)"
			@on-change="inputChange"
		/>
	</div>
</template>
