<!--TableIconBtn 带高级查询按钮的快捷搜索组件，v-model绑定搜索框的值，高级查询按钮控制是否展开高级查询组件（showHidePanelB+searchForm），全局UI组件，直接用
@created 2023.07.31
@author Ricky email:zhangqingcq@foxmail.com-->
<script setup lang="ts">
	/**
	 * 高级查询插件
	 * @desc 联合showHidePanelB、searchForm等插件对table进行查询
	 * @author ricky email:zhangqingcq@foxmail.com
	 * @date 2020.03.19
	 * @param {string} modelValue - 搜索框的值（v-model）必填
	 * @param {boolean} open - 高级搜索是否开启 必填
	 * @param {string} [placeholder] - 搜索框的placeholder
	 * @param {string} [width] - 整个插件宽度
	 * @param {string} [right] - 整个插件定位-右（最近relative）
	 * @param {string} [top] - 整个插件定位-上（最近relative）
	 * @example 调用示例 <table-search v-model="areaName" :open="openSearch" placeholder="片区名称" @on-search="search" @on-toggle="openSearch=!openSearch"/>
	 */

	import t from '../../locale/i18nSFC'
	import { setTimeout } from '../../methods/timer'

	const props = withDefaults(
		defineProps<{
			modelValue: string
			open: boolean
			placeholder?: string
			showBtn?: boolean
			fixed?: boolean
			width?: string | number
			right?: string | number
			top?: string | number
			btnColor?: string
		}>(),
		{
			open: false,
			showBtn: true,
			fixed: false,
			width: '210px',
			right: '0',
			top: '0',
			btnColor: 'inherit'
		}
	)
	const emit = defineEmits(['update:modelValue', 'on-toggle', 'on-search'])

	let isDebounce = false
	const value = computed({
		get() {
			return props.modelValue
		},
		set(d: string) {
			emit('update:modelValue', d)
		}
	})
	const openX = computed({
		get() {
			return props.open
		},
		set(d: boolean) {
			emit('on-toggle', d)
		}
	})
	const iconL = computed(() => (openX.value ? 'ios-arrow-up' : 'ios-arrow-down'))

	function onSearch() {
		if (!isDebounce) {
			isDebounce = true
			emit('on-search', value.value)
			setTimeout(() => {
				isDebounce = false
			}, 2000)
		}
	}
</script>

<template>
	<div
		class="tableSearchV"
		:style="{ position: props.fixed ? 'fixed' : 'absolute', right: props.right, top: props.top }"
	>
		<slot>
			<Input
				v-model="value"
				:style="{ width: props.width }"
				search
				@on-search="onSearch"
				class="searchInputC"
				:placeholder="props.placeholder || t('r.pInput')"
			/>
		</slot>
		<span class="sbt" @click="openX = !openX" v-show="props.showBtn" :style="{ color: props.btnColor }"
			><icon :type="iconL" :color="props.btnColor" />{{ t('r.adSearch') }}</span
		>
	</div>
</template>
