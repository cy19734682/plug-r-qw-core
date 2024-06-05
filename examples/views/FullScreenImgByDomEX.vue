<script setup lang="ts">
	import { fullScreenImgByDom } from '../../src'
	import testImg from '../assets/testImg.png'
	import logo from '../assets/logo.svg'

	function preview(i?: any) {
		if (typeof i === 'number') {
			fullScreenImgByDom([testImg, logo], i)
		} else {
			fullScreenImgByDom(testImg)
		}
	}
</script>

<template>
	<div class="linkImgV" @click="preview">
		<img src="../assets/testImg.png" alt="testImg" />
		<p>单张图全屏预览</p>
	</div>
	<div class="linkImgV">
		<img src="../assets/testImg.png" alt="testImg" @click="preview(0)" />
		<img src="../assets/logo.svg" alt="logo" @click="preview(1)" />
		<p @click="preview(0)">多张图预览</p>
	</div>
</template>
<style lang="less" scoped>
	.linkImgV {
		cursor: pointer;
		width: 300px;
		display: inline-block;
		text-align: center;

		&:hover {
			opacity: 0.85;
		}
		img {
			display: inline-block;
			height: 80px;
			& + img {
				margin-left: 20px;
			}
		}
	}
</style>
