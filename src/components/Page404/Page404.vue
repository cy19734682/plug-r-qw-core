<!--Page404 404页面，全局UI组件，直接用
@created 2023.06.12
@author Ricky email:zhangqingcq@foxmail.com-->

<script setup lang="ts">
	import type { Router } from 'vue-router'
	import t from '../../locale/i18nSFC'

	const instance = getCurrentInstance()!
	const router = instance.appContext.config.globalProperties.$router as Router

	function back() {
		router.go(-1)
	}
</script>

<template>
	<div class="c404K">
		<div class="t404">404</div>
		<div class="ct404">UH OH! {{ t('r.pageNotFound') }}</div>
		<div class="p404">{{ t('r.notFoundMsg') }}</div>

		<Button class="bt404" @click="back">{{ t('r.back') }}</Button>
	</div>
</template>
