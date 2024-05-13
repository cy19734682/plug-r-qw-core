/**
 * @description plug-r-qw 源代码入口文件
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2023.04.27
 */

import type { App } from 'vue'
import * as components from './components'
import * as globalFunc from './utils/globalFunc'
import * as outFunc from './utils/output'
import localeFile from './locale'

import { init } from './utils/timer'
import { set } from './utils/amap'
import './utils/wangeditor5init'
import JsonView from 'vue-json-viewer'

export * from './components'
export * from './utils/globalFunc'
export * from './utils/needImportFunc'
export * from './utils/output'

export const locale = localeFile.use
export const i18n = localeFile.i18n

const methodsR: Record<string, any> = {
	...outFunc,
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

export const install = function (app: App, options: plugROption = {}) {
	outFunc.$fetch.init(options.useStore || options.store, app)

	app.use(JsonView)

	if (options.locale) {
		localeFile.use(options.locale)
	}

	if (options.i18n) {
		localeFile.i18n(options.i18n)
	}

	if (options.router) {
		init(options.router)
		outFunc.tablePrint.init(options.router)
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
		app.directive('loadmore', {
			mounted(el, binding) {
				// 获取定义好的scroll盒子
				let SELECT_DOM: any = el

				if (binding.arg) {
					SELECT_DOM = document.getElementsByClassName(binding.arg)?.[0]
				}
				if (!SELECT_DOM) {
					return
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
			}
		})
	}

	//库基础字号，影响范围：iconTxtBtn的txt与icon的尺寸比例、fullPop的headerFontSize默认值、btTablePage的tooltip本体尺寸。
	app.config.globalProperties.fontSizeBase = 14
	// 搜索表单默认label宽度
	app.config.globalProperties.searchFormLabelWidth = 84
	// 搜索表单默认表单项内容宽度
	app.config.globalProperties.searchFormItemWidth = 202
	// 弹框表单默认label宽度
	app.config.globalProperties.formModalLabelWidth = 140
	// 弹框表单默认宽度
	app.config.globalProperties.formModalWidth = 520
	// 页内表单默认label宽度
	app.config.globalProperties.formGroupLabelWidth = 160
	// 页内表单默认宽度
	app.config.globalProperties.formGroupWidth = '100%'
	// iconTxtBtn默认图标大小
	app.config.globalProperties.iconTxtBtnIconSize = 17
	// 页签每页可选条数默认配置
	app.config.globalProperties.pageSizes = [10, 20, 50, 100]
	// btTablePage是否默认使用pagePro组件作为页签，还会影响transferBox
	app.config.globalProperties.btTablePageUsePagePro = true
	// btTablePage表格内容默认对齐方式
	app.config.globalProperties.btTablePageAlign = 'center'
	// pagePro和page是否默认展示total，还会影响btTablePage、transferBox
	app.config.globalProperties.pageShowTotal = true
	// pagePro和page是否默认展示sizer，还会影响btTablePage、transferBox
	app.config.globalProperties.pageShowSizer = true
	// tableSetting默认背景色
	app.config.globalProperties.tableSettingBg = '#fff'
	// tableSetting默认transfer
	app.config.globalProperties.tableSettingTransfer = true
	// tableSetting默认eventsEnabled
	app.config.globalProperties.tableSettingEventsEnabled = true
}

const plugRQw = { install }

export default plugRQw
