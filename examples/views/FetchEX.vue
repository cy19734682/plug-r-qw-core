<script setup lang="ts">
	import { $fetch, $swal } from '../../src'
	import NodeServeInfo from '@/components/NodeServeInfo.vue'
	import ShowReadMe from '@/components/ShowReadMe.vue'

	function httpA() {
		$fetch.get(location.pathname + 'testData/fetch.json').then((r: any) => {
			if (r && r.code === 0) {
				$swal('请求成功', '名称：' + r.data.name + '；邮箱：' + r.data.email, 'success')
			}
		})
	}

	function httpB() {
		$fetch.get('/node-serve/fetch-spin', {}, null, [], { spin: true }).then((r: any) => {
			if (r) {
				$swal('请求成功', r.message || '', 'success')
			}
		})
	}

	function httpC(d: string) {
		$fetch
			.get('/node-serve/fetch-403' + d)
			.then((r: any) => {
				console.log(r.message)
			})
			.catch(() => {})
	}
</script>

<template>
	<show-read-me />
	<NodeServeInfo />
	<div style="margin-top: 12px">
		<Button @click="httpA">点击模拟请求</Button>
		<Button @click="httpB">请求遮罩spin</Button>
		<Button @click="httpC('')">请求拦截器403</Button>
		<Button @click="httpC('-b')">请求拦截器403-b</Button>
	</div>
</template>
