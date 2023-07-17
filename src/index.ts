/**
 * @description plug-r-qw 源代码入口文件
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2023.04.27
 */

import type { App } from 'vue'
import * as components from './components'
export * from './components'
import localeFile from './locale'
import $fetch from './methods/fetch'
export { default as fetch } from './methods/fetch'
import * as globalFunc from './methods/globalFunc'
export * from './methods/globalFunc'
export * from './methods/needImortFunc'
import messageBox from './methods/messageBox'
export { default as messageBox } from './methods/messageBox'
import $swal from './methods/swal'
export { default as swal } from './methods/swal'
import $swalConfirm from './methods/swalConfirm'
export { default as swalConfirm } from './methods/swalConfirm'
import { init, setInterval, setTimeout } from './methods/timer'
export { setInterval, setTimeout } from './methods/timer'

const methodsR: Record<string, any> = {
	$fetch,
	$swal,
	$swalConfirm,
	messageBox,
	setInterval,
	setTimeout,
	...globalFunc
}

const install = function (app: App, options: Record<string, any> = {}) {
	$fetch.init(options.useStore || options.store, app)

	if (options.locale) {
		localeFile.use(options.locale)
	}

	if (options.i18n) {
		localeFile.i18n(options.i18n)
	}

	if (options.router) {
		init(options.router)
	}

	Object.keys(components).forEach((key) => {
		app.component(key, components[key])
	})

	Object.keys(methodsR).forEach((key) => {
		app.config.globalProperties[key] = methodsR[key]
	})
}

const locale = localeFile.use

const i18n = localeFile.i18n

export default {
	locale,
	i18n,
	install
}
