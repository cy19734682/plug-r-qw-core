/**
 * @description 国际化
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2023.04.27
 */
import deepmerge from 'deepmerge'
import zhLang from './lang/zh-CN'
import Format from './format'

const format = Format()
let lang: Record<keyof any, any> = zhLang
const message: Record<string, any> = {
	zh: zhLang
}
let nowLang: Record<keyof any, any>
let merged: Record<string, any> = {}
let vueI18n: Record<keyof any, any>
let i18nHandler = function (this: any, path: string, options?: Record<keyof any, any> | Array<string | number>) {
	if (typeof this === 'object' && Reflect.has(this, '$t')) {
		return this.$t(path, options)
	}
	if (vueI18n && vueI18n.global) {
		return vueI18n.global.t(path, options)
	}
	if (vueI18n && vueI18n.locale) {
		if (!merged[vueI18n.locale] || nowLang != vueI18n.locale) {
			merged[vueI18n.locale] = true
			let localMessage = vueI18n.getLocaleMessage(vueI18n.locale) || {}
			let newLocalMessage: Record<keyof any, any> = deepmerge(message[vueI18n.locale], localMessage, { clone: true })
			lang = newLocalMessage
			vueI18n.setLocaleMessage(vueI18n.locale, newLocalMessage)
			nowLang = vueI18n.locale
		}
		return vueI18n.hlang(path, options)
	}
}

export const t = function (this: any, path: string, options?: Record<keyof any, any> | Array<string | number>) {
	let value = i18nHandler.apply(this, [path, options])
	if (value !== null && value !== undefined) {
		return value
	}

	const array = path.split('.')
	let current = lang

	for (let i = 0, j = array.length; i < j; i++) {
		const property = array[i]
		value = current[property]
		if (i === j - 1) {
			return format(value, options)
		}
		if (!value) {
			return ''
		}
		current = value
	}
	return ''
}

export const use = function (l: Record<keyof any, any>) {
	lang = l || lang
}

export const i18n = function (initI18n: Record<keyof any, any>) {
	vueI18n = initI18n
}

export default {
	use,
	t,
	i18n
}
