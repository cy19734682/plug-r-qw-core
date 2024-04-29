<!--CheckboxGroupTwoClass 二级复选框组，支持v-model，可自定义label和v-model收集字段，可定义v-model只收集叶子节点数据或全部选中的节点数据
@created 2023.10.17
@author Ricky email:zhangqingcq@foxmail.com-->

<script lang="ts" setup>
	import { cloneDeep, isEmpty, isEqual } from 'lodash-es'
	import { myTypeof } from '../../utils/globalFunc'
	import t from '../../locale/i18nSFC'
	import type { TreeNode } from '../../public'

	const props = withDefaults(
		defineProps<{
			modelValue?: any[]
			data?: TreeNode[]
			firstTitle?: string
			secondTitle?: string
			label?: string /*节点的标签*/
			collectVal?: string | string[] /*v-model收集节点的哪些字段*/
			leaf?: boolean /*叶子节点模式，v-model只返回叶子节点数据，任何选择操作都会选择叶子节点*/
			disabled?: boolean /*禁用整颗树的checkbox选择功能*/
		}>(),
		{
			modelValue: () => [],
			data: () => [],
			label: 'name',
			collectVal: 'id',
			leaf: true
		}
	)
	const emit = defineEmits(['update:modelValue', 'on-change'])
	const leafChecked = ref<any[]>([])
	const dataT = computed(() => {
		let temp = cloneDeep(props.data)
		let valTemp = cloneDeep(leafChecked.value)
		for (let item of temp) {
			/*遍历data添加勾选信息*/
			let checkCount = 0
			if (item?.children && !isEmpty(item.children)) {
				for (let secItem of item.children) {
					/*更深一层遍历children*/
					for (let valIndex = 0, len = valTemp?.length; valIndex < len; valIndex++) {
						/*遍历继承的value*/
						if (Array.isArray(props.collectVal)) {
							/*收集多个字段的情况*/
							let equalI = true
							for (let collectKey of props.collectVal) {
								if (valTemp[valIndex]?.[collectKey] !== secItem?.[collectKey]) {
									/*遍历中当前节点和value的当前遍历元素不等（收集字段对应的值有不等的），判断为当前节点没有被选中，不在判断其他收集字段，跳出循环*/
									equalI = false
									break
								}
							}
							/*循环结束，如果equalI的值没被改为false,则表示当前节点被选中*/
							if (equalI) {
								/*如果当前节点被选中，当前父级中选中的子节点数加一，不在遍历value其他元素，跳出循环*/
								secItem.checked = true
								checkCount++
								valTemp.splice(valIndex, 1)
								break
							}
						} else if (valTemp[valIndex] === secItem[props.collectVal]) {
							/*收集单个字段且当前节点的对应字段的值和value中当前遍历元素相等,判断为选中，不在遍历value其他元素，跳出循环*/
							secItem.checked = true
							checkCount++
							valTemp.splice(valIndex, 1)
							break
						}
					}
					/*避免checked为Undefined*/
					!secItem.checked && (secItem.checked = false)
				}
			}
			if (checkCount === 0) {
				item.checked = false
				item.indeterminate = false
			} else if (item.children && checkCount === item.children.length) {
				item.checked = true
				item.indeterminate = false
			} else {
				item.checked = false
				item.indeterminate = true
			}
		}
		return temp
	})

	watch(
		() => props.modelValue,
		(after, before) => {
			if (isEqual(leafChecked.value, after) || isEqual(after, before)) {
				return
			}
			leafChecked.value = after
		},
		{
			immediate: true,
			deep: true
		}
	)

	function checkAll(root: TreeNode, isCheck: boolean) {
		if (root.children) {
			for (let item of root.children) {
				item.checked = isCheck
			}
		}
		updateDataT()
	}

	function updateDataT() {
		getLeafChecked(dataT.value, true)
	}

	function getLeafChecked(val: TreeNode[], isLeaf?: boolean) {
		let temp: any[] = []
		for (let item of val) {
			if (!isLeaf && !props.leaf && item.checked && item.indeterminate === false) {
				/*非叶子节点模式且需要获取parent节点时，如果当前parent节点所有子节点都选中，在value中带上parent节点*/
				if (Array.isArray(props.collectVal)) {
					let ttO: Record<string, any> = {}
					for (let keyI of props.collectVal) {
						ttO[keyI] = item[keyI]
					}
					temp.push(ttO)
				} else if (myTypeof(props.collectVal) === 'String') {
					temp.push(item[props.collectVal])
				}
			}
			if (item.children) {
				for (let secItem of item.children) {
					if (secItem.checked) {
						if (Array.isArray(props.collectVal)) {
							let ttO: Record<string, any> = {}
							for (let keyI of props.collectVal) {
								ttO[keyI] = secItem[keyI]
							}
							temp.push(ttO)
						} else if (myTypeof(props.collectVal) === 'String') {
							temp.push(secItem[props.collectVal])
						}
					}
				}
			}
		}
		if (isLeaf) {
			leafChecked.value = temp
			if (props.leaf) {
				emit('update:modelValue', temp)
				emit('on-change', cloneDeep(temp))
			} else {
				nextTick(function () {
					getLeafChecked(dataT.value)
				})
			}
		} else {
			emit('update:modelValue', temp)
			emit('on-change', cloneDeep(temp))
		}
	}
</script>

<template>
	<div class="boxLPA">
		<div class="headerJ">
			<div class="firstT borderBoxAS">{{ firstTitle || t('r.level.1') }}</div>
			<div class="secondT borderBoxAS">{{ secondTitle || t('r.level.2') }}</div>
		</div>
		<div class="bodyJ" v-for="(item, index) in dataT" :key="'checkboxJ' + index">
			<div class="firstCol borderBoxAS">
				<Checkbox
					v-model="item.checked"
					:indeterminate="item.indeterminate"
					@on-change="checkAll(item, $event)"
					:disabled="disabled"
					>{{ item[label] }}</Checkbox
				>
			</div>
			<div class="secondCol borderBoxAS">
				<div class="secItem" v-for="(secItem, indexSec) in item.children" :key="'secItem' + indexSec">
					<Checkbox v-model="secItem.checked" @on-change="updateDataT" :disabled="disabled">{{
						secItem[label]
					}}</Checkbox>
				</div>
			</div>
		</div>
	</div>
</template>
