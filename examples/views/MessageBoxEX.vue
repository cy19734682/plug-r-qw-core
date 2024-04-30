<script setup lang="ts">
	import { h } from 'vue'
	import { messageBox, setTimeout } from '../../src'
	import ShowReadMe from '@/components/ShowReadMe.vue'

	function msgB() {
		messageBox({
			content: 'hello',
			onOk() {
				console.log('ok 按钮被点击了')
			}
		})
	}

	function msgC() {
		messageBox({
			content: '',
			onOk() {
				return new Promise((r: any) => {
					console.log('ok 按钮被点击，模拟请求开始')
					setTimeout(() => {
						console.log('模拟请求完成')
						r()
					}, 3000)
				})
			}
		})
	}

	function msgD() {
		messageBox({
			title: '告诉你哦',
			content: h(
				'div',
				{
					style: {
						textAlign: 'center'
					}
				},
				[
					h('i', {
						class: 'ivu-icon ivu-icon-md-thumbs-up',
						style: {
							fontSize: '50px',
							color: 'deepskyblue'
						}
					}),
					h(
						'p',
						{
							style: {
								color: '#ff9900'
							}
						},
						'This lib is awesome!'
					)
				]
			),
			okText: '是的',
			cancelText: '我知道',
			onOk() {
				console.log('ok 按钮被点击了')
			}
		})
	}

	function msgE() {
		messageBox({
			title: '请注意',
			content: (_h) =>
				_h('div', [
					_h('div', { style: { fontSize: '26px', fontWeight: 'bold', color: '#51f4ac' } }, '我是内容，巴巴吧'),
					_h('div', { style: { color: '#ff9900' } }, '该种对话框和 Dom Node 对话框的区别就是不用引入 vue 的 h 函数')
				]),
			okText: '好',
			cancelText: '算了',
			onOk() {
				console.log('ok 按钮被点击了')
			}
		})
	}
</script>

<template>
	<show-read-me />
	<div>
		<Button type="primary" @click="msgB">对话框</Button>
		<Button @click="msgC">Promise 对话框</Button>
		<Button @click="msgD">Dom Node 对话框</Button>
		<Button @click="msgE">RenderFunction 对话框</Button>
	</div>
</template>
