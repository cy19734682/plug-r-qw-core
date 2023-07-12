<script setup lang="ts">
	import Proxy from '@/global/proxy'
	import NodeServeInfo from '@/components/NodeServeInfo.vue'
	import ShowReadMe from '@/components/ShowReadMe.vue'

	const proxy = Proxy()

	function httpA() {
		proxy.$fetch.get('/testData/fetch.json').then((r: any) => {
			if (r && r.code === 0) {
				proxy.$swal('请求成功', '名称：' + r.data.name + '；邮箱：' + r.data.email, 'success')
			}
		})
	}

	function httpB() {
		proxy.$fetch.get('/node-serve/fetch-spin', {}, null, [], { spin: true }).then((r: any) => {
			if (r) {
				proxy.$swal('请求成功', r.message || '', 'success')
			}
		})
	}

	function httpC(d: string) {
		proxy.$fetch
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
