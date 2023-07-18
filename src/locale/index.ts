/**
 * @description 国际化
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2023.04.27
 */
import deepmerge from 'deepmerge'
import zhLang from './lang/zh-CN'
import Format from './format'

const format = Format()
let lang: any = zhLang
const message = {
	zh: zhLang
}
let nowLang = null
let merged = {}
let vueI18n: any = null
let i18nHandler = function (this, ...args) {
	if (Reflect.has(this, '$t')) {
		return this.$t(...args)
	}
	if (vueI18n && vueI18n.global) {
		return vueI18n.global.t(...args)
	}
	if (vueI18n && vueI18n.locale) {
		if (!merged[vueI18n.locale] || nowLang != vueI18n.locale) {
			merged[vueI18n.locale] = true
			let localMessage = vueI18n.getLocaleMessage(vueI18n.locale) || {}
			let newLocalMessage = deepmerge(message[vueI18n.locale], localMessage, { clone: true })
			lang = newLocalMessage
			vueI18n.setLocaleMessage(vueI18n.locale, newLocalMessage)
			nowLang = vueI18n.locale
		}
		return vueI18n.hlang(...args)
	}
}

export const t = function (this, ...args: Parameters<typeof i18nHandler>) {
	let path = args[0]
	let options = args[1]
	let value = i18nHandler.apply(this, args)
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

export const use = function (l) {
	lang = l || lang
}

export const i18n = function (initI18n) {
	vueI18n = initI18n
}

export default {
	use,
	t,
	i18n
}
