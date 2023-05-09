import {createRouter, createWebHistory} from 'vue-router'
import MessageBox from '../views/MessageBoxEX.vue'
import Swal from '../views/SwalEX.vue'

// @ts-ignore
const bl = import.meta.env.BASE_URL

const router = createRouter({
  history: createWebHistory(bl),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: '$swal',
      component: Swal,
      meta: {
        desc: '提示框'
      }
    },
    {
      path: '/messageBox',
      name: 'messageBox',
      component: MessageBox,
      meta: {
        desc: '对话框'
      }
    }
  ]
})

export default router
