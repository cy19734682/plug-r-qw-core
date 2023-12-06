<script lang="ts" setup>
	import { ref } from 'vue'
	import NodeServeInfo from '@/components/NodeServeInfo.vue'
	import ShowReadMe from '@/components/ShowReadMe.vue'

	const value = ref(null)
	const value1 = ref(null)
	const value2 = ref(null)
	const value3 = ref(null)

	function handleChange(val: any) {
		console.log(val)
	}

	function filterB(d: any) {
		return d.filter((e:any) => e.name !== '阿上')
	}
</script>
<template>
	<show-read-me />
	<NodeServeInfo style="margin-bottom: 10px" />
	<div class="wellWall">
		<well-card title="searchWordsRequired为false(默认)" width="300px" height="400px" inline>
			<div class="inBox">
				<select-scroll-more
					v-model="value"
					url="/node-serve/select-scroll-more"
					:searchData="{ size: 7 }"
					@on-change="handleChange"
					style="width: 250px"
				/>
				<p class="outJ"
					>值： <span>{{ value }}</span></p
				>
			</div>
		</well-card>
		<well-card title="searchWordsRequired为true" width="300px" height="400px" inline style="margin-left: 10px">
			<div class="inBox">
				<select-scroll-more
					v-model="value1"
					url="/node-serve/select-scroll-more"
					:searchData="{ size: 7 }"
					@on-change="handleChange"
					style="width: 250px"
					searchWordsRequired
				/>
				<p class="outJ"
					>值： <span>{{ value1 }}</span></p
				>
			</div>
		</well-card>
		<well-card title="optionFilter：过滤掉选项‘阿上’" width="300px" height="400px" inline style="margin-left: 10px">
			<div class="inBox">
				<select-scroll-more
					v-model="value2"
					url="/node-serve/select-scroll-more"
					:searchData="{ size: 8 }"
					@on-change="handleChange"
					style="width: 250px"
					:option-filter="filterB"
				/>
				<p class="outJ"
					>值： <span>{{ value2 }}</span></p
				>
			</div>
		</well-card>
		<well-card title="multiple 多选" width="300px" height="400px" inline style="margin-left: 10px">
			<div class="inBox">
				<select-scroll-more
					v-model="value3"
					url="/node-serve/select-scroll-more"
					:searchData="{ size: 7 }"
					@on-change="handleChange"
					style="width: 250px"
					multiple
					allow-create
				/>
				<p class="outJ"
					>值： <span>{{ value3 }}</span></p
				>
			</div>
		</well-card>
	</div>
</template>
<style lang="less" scoped>
	.wellWall {
		padding: 30px 20px 10px 20px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		background-color: #fff;
		> div {
			margin-bottom: 20px;
		}
	}

	.inBox {
		padding: 15px;
	}

	.outJ {
		margin-top: 20px;
		padding-left: 20px;
	}
</style>
