import {createApp} from 'vue'
import {createPinia} from 'pinia'
import {useStore} from "./stores/main"

import App from '@/App.vue'
import router from './router'

import {createI18n} from 'vue-i18n'
import en from '@/lang/en-US'
import zh from '@/lang/zh-CN'
import enI from 'view-ui-plus/dist/locale/en-US'
import zhI from 'view-ui-plus/dist/locale/zh-CN'
import enR from '../src/locale/lang/en-US'
import zhR from '../src/locale/lang/zh-CN'

import './assets/main.css'

import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'

/*import plugRQw from "../lib/plugRQw.mjs"
 import '../lib/plugRQw.min.css'*/

import plugRQw from '../src'
import '../src/style/index.less'

// localStorage.setItem('locale','zh')
const i18n = createI18n({
  allowComposition: true,
  globalInjection: true,
  legacy: false,
  locale: localStorage.getItem('locale') || 'zh',
  messages: {
    en: {...en, ...enI, ...enR},
    zh: {...zh, ...zhI, ...zhR}
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(ViewUIPlus, {i18n})
app.use(plugRQw,{useStore,router,i18n})

app.mount('#app')
