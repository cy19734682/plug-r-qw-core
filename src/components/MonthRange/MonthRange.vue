<!--MonthRange 月份区间选择器
@created 2023.08.28
@author Ricky email:zhangqingcq@foxmail.com-->

<script lang="ts" setup>
	import t from '../../locale/i18nSFC'

	const emit = defineEmits(['update:modelValue', 'on-change'])
	const props = withDefaults(
		defineProps<{
			modelValue?: string[]
			placement?:
				| 'top'
				| 'top-start'
				| 'top-end'
				| ' bottom'
				| 'bottom-start'
				| ' bottom-end'
				| ' left '
				| 'left-start '
				| 'left-end '
				| 'right '
				| 'right-start '
				| 'right-end'
			placeholder?: string
			options1?: Record<string, any>
			options2?: Record<string, any>
			disabled?: boolean
		}>(),
		{
			modelValue: () => ['', ''],
			placement: 'bottom-start',
			disabled: false
		}
	)

	const openA = ref(false)
	const openB = ref(false)
	const mouseOver = ref(false)

	const valueA = computed({
		get() {
			return (props.modelValue && props.modelValue[0]) || null
		},
		set(v: any) {
			emit('update:modelValue', [v, valueB.value])
			emit('on-change', [v, valueB.value])
		}
	})
	const valueB = computed({
		get() {
			return (props.modelValue && props.modelValue[1]) || null
		},
		set(v: any) {
			emit('update:modelValue', [valueA.value, v])
			emit('on-change', [valueA.value, v])
		}
	})
	const valueT = computed(
		() => (valueA.value || '') + (((valueA.value || valueB.value) && ' - ') || '') + (valueB.value || '')
	)

	const mPickerRef = ref()

	onMounted(() => {
		mPickerRef.value.querySelector('.aRoot .ivu-input-suffix').addEventListener('mouseover', () => {
			mouseOver.value = true
		})
		mPickerRef.value.querySelector('.aRoot .ivu-input-suffix').addEventListener('mouseout', () => {
			mouseOver.value = false
		})
		mPickerRef.value.querySelector('.aRoot .ivu-input-suffix').addEventListener('click', (e: any) => {
			if (!props.disabled && (valueA.value || valueB.value)) {
				e.stopPropagation()
				clear()
			}
		})
	})

	function focus() {
		if (!props.disabled) {
			openA.value = true
		}
	}

	function changeA(d: any) {
		valueA.value = d
		openA.value = false
		openB.value = true
	}

	function changeB(d: any) {
		valueB.value = d
		openB.value = false
	}

	function clear() {
		emit('update:modelValue', [null, null])
		emit('on-change', [null, null])
	}

	function close() {
		openA.value = false
		openB.value = false
		if (valueA.value && valueB.value === null) {
			valueA.value = null
		}
	}
</script>

<template>
	<div class="monthRangeBoxR" ref="mPickerRef">
		<DatePicker
			:open="openB"
			:modelValue="valueB"
			transfer
			type="month"
			:placement="props.placement"
			:options="props.options2"
			@on-change="changeB"
			@on-clickoutside="close"
		>
			<div class="bRoot"></div>
		</DatePicker>
		<DatePicker
			:open="openA"
			:modelValue="valueA"
			transfer
			type="month"
			:placement="props.placement"
			:options="props.options1"
			@on-change="changeA"
			@on-clickoutside="close"
		>
			<div @click="focus">
				<Input
					class="aRoot"
					v-model="valueT"
					readonly
					:placeholder="props.placeholder || t('r.selectDate')"
					:disabled="props.disabled"
				>
					<template #suffix>
						<Icon
							:type="mouseOver && (valueA || valueB) && !props.disabled ? 'ios-close-circle' : 'ios-calendar-outline'"
						/>
					</template>
				</Input>
			</div>
		</DatePicker>
	</div>
</template>
