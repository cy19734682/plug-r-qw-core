import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from '@/stores/main'
import Swal from '@/views/SwalEX.vue'

// @ts-ignore
const bl = import.meta.env.BASE_URL

const router = createRouter({
	history: createWebHistory(bl),
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			redirect: '/fetch'
		},
		{
			path: '/login',
			name: 'Login',
			component: () => import('@/views/Login.vue')
		},
		{
			path: '/fetch',
			name: '$fetch',
			component: () => import('@/views/FetchEX.vue'),
			meta: {
				desc: '网络请求插件'
			}
		},
		{
			path: '/swal',
			name: '$swal',
			component: Swal,
			meta: {
				desc: '提示框'
			}
		},
		{
			path: '/fullPop',
			name: 'FullPop',
			component: () => import('@/views/FullPopEX.vue'),
			meta: {
				desc: '全屏弹框'
			}
		},
		{
			path: '/messageBox',
			name: 'MessageBox',
			component: () => import('@/views/MessageBoxEX.vue'),
			meta: {
				desc: '对话框'
			}
		},
		{
			path: '/page404',
			name: 'Page404',
			component: () => import('@/views/Page404EX.vue'),
			meta: {
				desc: '404页面'
			}
		},
		{
			path: '/sideMenu',
			name: 'SideMenu',
			component: () => import('@/views/SideMenuEX.vue'),
			meta: {
				desc: '左侧菜单'
			}
		}
	]
})

router.beforeEach((to, from, next) => {
	const store = useStore()
	if (from.name === 'login') {
		store.fullScreen = false
	} else if (to.name === 'login' && !store.fullScreen) {
		store.fullScreen = true
	}
	next()
})

export default router
