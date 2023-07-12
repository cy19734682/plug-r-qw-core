<script setup lang="ts">
	import { computed, ref } from 'vue'
	import { useRoute } from 'vue-router'
	import mds_c from '../../src/components'
	import mds_m from '../../src/methods'
	import Md from '@/components/Md.vue'

	const props = withDefaults(defineProps<{ routeNow?: string; color?: string }>(), {
		color: '#2d8cf0',
		routeNow: ''
	})
	let open = ref(false)
	let fullPopRef = ref()
	const route = useRoute()
	const routeName = computed(() => {
		return String(route.name)
	})

	function click() {
		fullPopRef.value.open()
		open.value = true
	}
</script>

<template>
	<div :class="{ conMA: true, fullKA: open }">
		<span class="btnAR" @click="click" :style="{ color: color }"
			><Icon type="ios-paper" style="position: relative; bottom: 1px" /> 查看说明</span
		>
		<FullPop :title="routeName" ref="fullPopRef" @on-close="open = false">
			<div class="wallK">
				<Md
					:data="(routeNow && mds_c[routeNow]) || mds_c[routeName] || mds_m[routeName.replace('$', '').toLowerCase()]"
				/>
			</div>
		</FullPop>
	</div>
</template>

<style lang="less" scoped>
	.conMA {
		position: absolute;
		z-index: 10;
		top: -30px;
		right: 250px;
		text-align: left;

		&.fullKA {
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 1700;
		}
	}

	.btnAR {
		cursor: pointer;

		&:hover {
			opacity: 0.85;
		}
	}

	.wallK {
		padding: 30px 0;
		background-color: #fbfbfb;
		min-height: 100%;
	}

	.myCardB {
		width: 980px;
		margin: 0 auto;
		padding: 45px;
		background-color: #fff;
		box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
		border-radius: 4px;
		text-align: left;
	}
</style>
