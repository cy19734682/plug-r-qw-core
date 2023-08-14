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
			content: 'content',
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
			title: '请注意',
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
								color: '#997800'
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
</script>

<template>
	<show-read-me />
	<div>
		<Button type="primary" @click="msgB">对话框</Button>
		<Button @click="msgC">Promise 对话框</Button>
		<Button @click="msgD">Dom Node 对话框</Button>
	</div>
</template>
