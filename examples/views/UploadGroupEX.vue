<script lang="ts" setup>
	import ShowReadMe from '@/components/ShowReadMe.vue'
	import NodeServeInfo from '@/components/NodeServeInfo.vue'

	const fileId = ref([])
	const fileId2 = ref([])
	const fileId3 = ref([])
	const fileId4 = ref([])
	const url = '/node-serve/file'

	function printFile(data: any) {
		console.log(data)
	}
</script>

<template>
	<show-read-me />
	<NodeServeInfo />
	<div class="wellWall">
		<well-card class="upBox" fit-to-content title="本地上传">
			<div class="innerK">
				<p style="margin-bottom: 10px">
					说明：文件本地上传，组件的值为file对象的集合，需要获取file对象自行处理上传逻辑时使用，file对象不能直接在页面展示，请查看控制台</p
				>
				<UploadGroup v-model="fileId" :manual-upload="true" @on-file-id-change="printFile(fileId)" />
			</div>
		</well-card>
		<well-card class="upBox" fit-to-content title="本地上传-图片模式">
			<div class="innerK">
				<p style="margin-bottom: 10px">
					说明：上传格式限制为图片时，该模式可预览上传的图片，如果文件列表中有非图片文件，则自动转换为列表模式，file对象不能直接在页面展示，请查看控制台</p
				>
				<UploadGroup v-model="fileId2" :manual-upload="true" :show-img="true" @on-file-id-change="printFile(fileId2)" />
			</div>
		</well-card>
		<well-card class="upBox" fit-to-content title="上传到服务器">
			<div class="innerK">
				<p style="margin-bottom: 10px">
					说明：文件直接上传到服务器，因为本组件该模式是定制化开发，接口数据格式限定死了，本例子用的私有地址，只在特定环境有效,如果需要在其他接口数据格式下使用该组件，推荐使用本地模式，然后自己处理上传到服务器的逻辑，或者使用iview的upload组件</p
				>
				<p>组件值：{{ fileId3 }}</p>
				<UploadGroup v-model="fileId3" :url="url" />
			</div>
		</well-card>
		<well-card class="upBox" fit-to-content title="上传到服务器-图片模式">
			<div class="innerK">
				<p style="margin-bottom: 10px">
					说明：上传格式限制为图片时，该模式可预览上传的图片，如果文件列表中有非图片文件，则自动转换为列表模式</p
				>
				<p>组件值：{{ fileId4 }}</p>
				<UploadGroup v-model="fileId4" :url="url" :show-img="true" multiple />
			</div>
		</well-card>
	</div>
</template>
<style lang="less" scoped>
	.wellWall {
		margin-top: 15px;
		padding: 30px 20px 10px 20px;
		overflow: auto;
		height: calc(100% - 42px);
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		background-color: #fff;

		.upBox {
			text-align: left;
			margin-bottom: 20px;

			.innerK {
				width: 520px;
				padding: 20px;
				height: 100%;
			}
		}
	}
</style>
