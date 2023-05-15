import {createRouter, createWebHistory} from 'vue-router'
import Swal from '../views/SwalEX.vue'

// @ts-ignore
const bl = import.meta.env.BASE_URL

const router = createRouter({
  history: createWebHistory(bl),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect:'/swal'
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
      path: '/FullPop',
      name: 'FullPop',
      component: ()=>import('../views/FullPopEX.vue'),
      meta: {
        desc: '全屏弹框'
      }
    },
    {
      path: '/messageBox',
      name: 'messageBox',
      component: ()=>import('../views/MessageBoxEX.vue'),
      meta: {
        desc: '对话框'
      }
    }
  ]
})

export default router
