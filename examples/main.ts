import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useStore } from './stores/main'

import App from '@/App.vue'
import router from './router'

import { createI18n } from 'vue-i18n'
import en from '@/lang/en-US'
import zh from '@/lang/zh-CN'
// @ts-ignore
import enI from 'view-ui-plus/dist/locale/en-US'
// @ts-ignore
import zhI from 'view-ui-plus/dist/locale/zh-CN'
import enR from '../src/locale/lang/en-US'
import zhR from '../src/locale/lang/zh-CN'

import './assets/main.css'

import ViewUIPlus from 'view-ui-plus'
import './global/iViewTheme.less'

/*import plugRQw from '../lib/plugRQw.js'
 import '../lib/plugRQw.min.css'*/

import plugRQw from '../src'
import '../src/style/index.less'

import 'github-markdown-css/github-markdown-light.css'

const i18n = createI18n({
	allowComposition: true,
	globalInjection: true,
	legacy: false,
	locale: localStorage.getItem('locale') || 'zh',
	messages: {
		en: { ...en, ...enI, ...enR },
		zh: { ...zh, ...zhI, ...zhR }
	}
})

let app = createApp(App)
app
	.use(createPinia())
	.use(router)
	.use(i18n)
	.use(ViewUIPlus, { i18n })
	.use(plugRQw, {
		useStore,
		router,
		i18n
	})
	.mount('#app')

//全局UI变量定制示例
app.config.globalProperties.formGroupLabelWidth = 150
