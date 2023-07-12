import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'

export const useStore = defineStore('main', () => {
	const isLogin = ref(false)

	const fullScreen = ref(false)

	function logout() {
		router.push('/login').then()
	}

	return {
		isLogin,
		fullScreen,
		logout
	}
})
