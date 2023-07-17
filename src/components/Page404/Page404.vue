<script setup lang="ts">
	import t from '../../locale/sfc-i18n'
	import { getCurrentInstance } from 'vue'
	import type { Router } from 'vue-router'

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
