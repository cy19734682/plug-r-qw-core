/**
 * @description plug-r-qw 源代码入口文件
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2023.04.27
 */

import type { App } from 'vue'
import * as components from './components'
import * as globalFunc from './methods/globalFunc'
import * as needImportFunc from './methods/needImportFunc'
import localeFile from './locale'
import $fetch from './methods/fetch'
import fullScreenImgByDom from './methods/fullScreenImgByDom'
import fullScreenImgPreview from './methods/fullScreenImgPreview'
import messageBox from './methods/messageBox'
import $swal from './methods/swal'
import $swalConfirm from './methods/swalConfirm'
import { init, setInterval, setTimeout } from './methods/timer'
import { set } from './methods/amap'

export * from './components'
export * from './methods/globalFunc'
export * from './methods/needImportFunc'
export { default as $fetch } from './methods/fetch'
export { default as fullScreenImgByDom } from './methods/fullScreenImgByDom'
export { default as fullScreenImgPreview } from './methods/fullScreenImgPreview'
export { default as messageBox } from './methods/messageBox'
export { default as $swal } from './methods/swal'
export { default as $swalConfirm } from './methods/swalConfirm'
export { setInterval, setTimeout } from './methods/timer'

const methodsR: Record<string, any> = {
	$fetch,
	fullScreenImgByDom,
	fullScreenImgPreview,
	$swal,
	$swalConfirm,
	messageBox,
	setInterval,
	setTimeout,
	...globalFunc
}

export interface plugROption {
	notRegistryGlobal?: boolean
	store?: any
	useStore?: any
	router?: Record<keyof any, any>
	locale?: Record<keyof any, any>
	i18n?: Record<keyof any, any>
	amap?: { securityJsCode: string; key: string }

	[k: keyof any]: any
}

const install = function (app: App, options: plugROption = {}) {
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

	if (options.amap) {
		set(options.amap)
	}

	if (!options.notRegistryGlobal) {
		Object.keys(components).forEach((key) => {
			if (!app.component(key)) {
				app.component(key, (components as Record<string, any>)[key])
			}
		})

		Object.keys(methodsR).forEach((key) => {
			app.config.globalProperties[key] = methodsR[key]
		})
	}

	if (!app.directive('has')) {
		app.directive('has', (el, binding) => {
			if (binding.value && !globalFunc.hasPermission(binding.value)) {
				el.style.display = 'none'
			}
		})
	}
	if (!app.directive('loadmore')) {
		//select下拉滚动监听事件 可通过指令参数传递class来指定容器
		app.directive('loadmore', (el, binding) => {
			// 获取定义好的scroll盒子
			let SELECT_DOM: any

			if (binding.arg) {
				SELECT_DOM = el.querySelector('.' + binding.arg)
			} else {
				SELECT_DOM = el.querySelector('.ivu-select-dropdown') || el
			}
			SELECT_DOM.addEventListener('scroll', function () {
				/*
				 * scrollHeight 获取元素内容高度(只读)
				 * scrollTop 获取或者设置元素的偏移值,常用于, 计算滚动条的位置, 当一个元素的容器没有产生垂直方向的滚动条, 那它的scrollTop的值默认为0.
				 * clientHeight 读取元素的可见高度(只读)
				 * 如果元素滚动到底, 下面等式返回true, 没有则返回false:
				 * ele.scrollHeight - ele.scrollTop === ele.clientHeight;
				 */
				if (SELECT_DOM.scrollTop > 0 && SELECT_DOM.scrollHeight - SELECT_DOM.scrollTop <= SELECT_DOM.clientHeight) {
					binding.value()
				}
			})
		})
	}
}

const locale = localeFile.use

const i18n = localeFile.i18n
export default {
	locale,
	i18n,
	install,
	...globalFunc,
	...needImportFunc,
	$fetch,
	fullScreenImgByDom,
	fullScreenImgPreview,
	$swal,
	$swalConfirm,
	messageBox,
	setInterval,
	setTimeout
}
