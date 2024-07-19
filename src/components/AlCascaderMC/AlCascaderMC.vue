<!--AlCascaderMC 行政区域级联，v-model绑定区域代码，内置数据，可设置地址级别
@created 2023.08.21
@author Ricky email:zhangqingcq@foxmail.com-->

<script lang="ts" setup>
	import { cloneDeep, isEmpty, last } from 'lodash-es'
	import t from '../../locale/i18nSFC'
	import ArCascader from 'ar-cascader'

	const emit = defineEmits(['update:modelValue', 'on-name-change'])
	const props = withDefaults(
		defineProps<{
			modelValue?: string | number | any[] | null /*组件绑定的值（v-model）*/
			level?: 0 | 1 | 2 | '0' | '1' | '2' /*精确至几级行政区域（0：省级，1：市级，2：县级）*/
			disabled?: boolean /*禁用组件*/
			transfer?: boolean /*弹出框元素直接放置于body下*/
			filterable?: boolean /*可搜索*/
			separator?: string /*地址名称分隔符*/
			placeholder?: string /*占位符*/
		}>(),
		{
			level: 2,
			disabled: false,
			transfer: true,
			filterable: true,
			separator: '/'
		}
	)
	const valueT = computed({
		get() {
			if (props.modelValue && (typeof props.modelValue === 'string' || typeof props.modelValue === 'number')) {
				let temp = String(props.modelValue).trim()

				let regP = /^\d+$/
				if (regP.test(temp)) {
					let lv1 = temp.substring(0, 2) + '0000000000'
					let lv2 = temp.substring(0, 4) + '00000000'
					return [lv1, lv2, temp]
				}

				if (temp.indexOf(props.separator) !== -1) {
					/*以中文名称和分隔符拼接的String地址*/
					return temp.split(props.separator)
				}

				return [temp]
			} else if (Array.isArray(props.modelValue)) {
				return cloneDeep(props.modelValue)
			} else {
				return []
			}
		},
		set(val) {
			if (isEmpty(val)) {
				emit('update:modelValue', null)
				emit('on-name-change', null)
			} else {
				let l: Record<string, any> = last(val)
				let code = ''
				let name = ''
				if (l) {
					code = l.code
				}
				if (code && code.length < 12) {
					let t: any[] = [...code]
					while (t.length < 12) {
						t.push(0)
					}
					code = t.join('')
				}
				if (Array.isArray(val)) {
					name = val
						.map((item) => {
							return item?.name
						})
						.join(props.separator)
				}
				if (code) {
					if (code === props.modelValue) {
						return
					}
					emit('update:modelValue', code)
				}
				if (name) {
					emit('on-name-change', name)
				}
			}
		}
	})
</script>

<template>
	<ar-cascader
		v-bind="$attrs"
		class="alCascaderMC"
		v-model="valueT"
		:level="props.level"
		:disabled="props.disabled"
		:placeholder="props.placeholder || t('r.pSelect')"
		:transfer="props.transfer"
		:searchable="props.filterable"
	/>
</template>
