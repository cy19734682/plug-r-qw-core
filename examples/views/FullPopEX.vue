<script setup lang="ts">
	import ShowReadMe from '@/components/ShowReadMe.vue'

	const fullPop = ref()

	function popF() {
		fullPop.value.open()
	}
</script>

<template>
	<ShowReadMe />
	<Button @click="popF">全屏弹框</Button>
	<FullPop title="全屏弹框" ref="fullPop">
		<div style="padding: 12px">
			<div>我是内容巴拉巴拉巴拉~</div>
		</div>
	</FullPop>
</template>
