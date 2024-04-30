<!--CheckboxTree 复选框树，支持v-model，可自定义label和v-model收集字段，可定义v-model只收集叶子节点数据或全部选中的节点数据
@created 2023.09.01
@author Ricky email:zhangqingcq@foxmail.com-->

<script lang="ts" setup>
	import { setValByOption } from '../../utils/globalFunc'
	import { findIndex, find, cloneDeep } from 'lodash-es'

	const emit = defineEmits(['update:modelValue', 'on-change'])
	const props = withDefaults(
		defineProps<{
			modelValue?: any[] /*选中的节点的集合（内容依据collectVal中的字段）*/
			data?: any[] /*树结构数据*/
			expandAll?: boolean /*是否默认全部展开*/
			label?: string /*节点的标签*/
			collectVal?: string | string[] /*v-model收集节点的哪些字段*/
			leaf?: boolean /*叶子节点模式，v-model只返回叶子节点数据，任何选择操作都会选择叶子节点*/
			inlineLeaf?: boolean /*叶子节点为行内模式，横向排列*/
			disabled?: boolean /*禁用整颗树的checkbox选择功能*/
		}>(),
		{
			modelValue: () => [],
			data: () => [],
			expandAll: false,
			label: 'name',
			collectVal: 'id',
			leaf: true,
			inlineLeaf: false,
			disabled: false
		}
	)

	const initTree = ref(true)
	const dataT = ref<any[]>([])
	const id = 'CKT' + Math.floor(Math.random() * 10000000 + 10000000)
	let valueE: any[] = []
	const collectValT = computed(() => {
		if (Array.isArray(props.collectVal)) {
			return props.collectVal
		} else if (typeof props.collectVal === 'string') {
			return [props.collectVal]
		}
		return []
	})
	const valueT = computed(() => {
		if (Array.isArray(props.modelValue)) {
			return props.modelValue
		}
		return []
	})

	watch(
		() => props.data,
		(after: any) => {
			initTree.value = false
			let temp: any[] = []
			initData(after, temp)
			dataT.value = temp
			nextTick(function () {
				initTree.value = true

				if (props.inlineLeaf) {
					nextTick(changeStyle)
				}
			})
		},
		{
			immediate: true,
			deep: true
		}
	)

	watch(
		() => valueT.value,
		(after: any) => {
			let key: string
			let type = 's'
			if (Array.isArray(props.collectVal)) {
				key = props.collectVal[0] || ''
				type = 'a'
			} else {
				key = props.collectVal
			}
			if (!key || JSON.stringify(after) === JSON.stringify(valueE)) {
				valueE = []
				return
			}
			/*清空dataT已选*/
			setValByOption({
				group: dataT.value,
				condition: (e: any) => e?.checked === true,
				key: 'checked',
				val: false
			})
			/*根据value设置dataT的已选*/
			if (type === 'a') {
				setValByOption({
					group: dataT.value,
					condition: (e) => findIndex(after, [key, e?.[key]]) !== -1,
					key: 'checked',
					val: true
				})
			} else {
				setValByOption({
					group: dataT.value,
					condition: (e) => after.indexOf(e?.[key]) !== -1,
					key: 'checked',
					val: true
				})
			}
		}
	)

	watch(
		() => props.disabled,
		(after: any) => {
			setValByOption({
				group: dataT.value,
				condition: (e) => e && e.disableCheckbox !== after,
				key: 'disableCheckbox',
				val: after
			})
			if (props.inlineLeaf) {
				nextTick(changeStyle)
			}
		},
		{ immediate: true }
	)

	function initData(data: any[], root: any[] = []) {
		for (let item of data) {
			let checked = false
			if (collectValT.value.length > 1) {
				/*valueT的元素为Object*/
				checked = find(valueT.value, (e: any) => e[collectValT.value[0]] === item[collectValT.value[0]]) !== undefined
			} else {
				checked = collectValT.value[0] ? valueT.value.indexOf(item[collectValT.value[0]]) !== -1 : false
			}
			let temp: Record<string, any> = {
				name: item?.[props.label],
				expand: Boolean(props.expandAll || item?.expand),
				checked: checked,
				disableCheckbox: props.disabled
			}
			for (let keyI of collectValT.value) {
				temp[keyI] = item[keyI]
			}
			root.push(temp)
			if (item?.children && item.children.length > 0) {
				temp.children = []
				initDataB(item.children, temp.children)
			}
		}
	}

	function initDataB(data: any[], root: any[] = []) {
		for (let item of data) {
			let checked = false
			if (collectValT.value.length > 1) {
				/*valueT的元素为Object*/
				checked = find(valueT.value, (e) => e[collectValT.value[0]] === item[collectValT.value[0]]) !== undefined
			} else {
				checked = collectValT.value[0] ? valueT.value.indexOf(item[collectValT.value[0]]) !== -1 : false
			}
			let temp: Record<string, any> = {
				name: item?.[props.label],
				expand: Boolean(props.expandAll || item?.expand),
				checked: checked,
				disableCheckbox: props.disabled
			}
			for (let keyI of collectValT.value) {
				temp[keyI] = item[keyI]
			}
			root.push(temp)
			if (item?.children && item.children.length > 0) {
				temp.children = []
				initData(item.children, temp.children)
			}
		}
	}

	function renderContent(
		h: any,
		{
			data
		}: {
			data: any
		}
	) {
		let classA = ''
		let isLeaf = true
		if (data.children && data.children.length > 0) {
			for (let ii of data.children) {
				if (ii.children !== undefined) {
					isLeaf = false
					break
				}
			}
			if (isLeaf && props.inlineLeaf) {
				classA = 'inlineChildXA'
			}
		}
		return h(
			'div',
			{
				style: {
					display: 'inline-block',
					width: '100%'
				},
				class: classA
			},
			[
				h(
					'span',
					{
						style: {
							fontWeight: data.children ? 'bold' : 'normal'
						}
					},
					data.name
				)
			]
		)
	}

	function changeStyle(data?: Record<string, any>) {
		if (data) {
			if (data.expand) {
				nextTick(changeStyle)
			}
			return
		}
		let arr = document.querySelectorAll('#' + id + ' .inlineChildXA')
		if (arr.length > 0) {
			for (let item of arr) {
				let parent = item?.parentElement
				let tt = parent?.nextElementSibling
				if (!tt) {
					return
				}
				if (tt.tagName !== 'BR') {
					let grandParent = parent?.parentElement
					let br = document.createElement('br')
					grandParent?.insertBefore(br, tt)
					tt = br.nextElementSibling
					if (tt?.className.indexOf('inlineTreeNodeF') === -1) {
						tt.setAttribute('class', tt.className + ' inlineTreeNodeF')
					}
				}
				while (tt?.nextElementSibling) {
					tt = tt.nextElementSibling
					if (tt.className.indexOf('inlineTreeNodeF') === -1) {
						tt.setAttribute('class', tt.className + ' inlineTreeNodeF')
					}
				}
			}
		}
	}

	function updateVal(data: any[]) {
		let temp: any[] = []
		if (props.leaf) {
			for (let item of data) {
				if (!item.children) {
					if (Array.isArray(props.collectVal)) {
						let valT: Record<string, any> = {}
						for (let keyI of props.collectVal) {
							valT[keyI] = item[keyI]
						}
						temp.push(valT)
					} else {
						temp.push(item[props.collectVal])
					}
				}
			}
		} else {
			for (let item of data) {
				if (Array.isArray(props.collectVal)) {
					let valT: Record<string, any> = {}
					for (let keyI of props.collectVal) {
						valT[keyI] = item[keyI]
					}
					temp.push(valT)
				} else {
					temp.push(item[props.collectVal])
				}
			}
		}
		valueE = temp
		emit('update:modelValue', temp)
		emit('on-change', cloneDeep(temp))
	}
</script>

<template>
	<Tree
		:id="id"
		class="checkboxTreeGA"
		v-if="initTree"
		:data="dataT"
		:render="renderContent"
		@on-check-change="updateVal"
		@on-toggle-expand="changeStyle"
		show-checkbox
	/>
</template>
