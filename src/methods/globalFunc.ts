/**
 * @description 全局公共方法集合，挂在app.config.globalProperties下
 * @author ricky zhangqingcq@foxmail.com
 * @created 2023.07.14
 */
import type { Collection, PlainObject } from '../public'
import _ from 'lodash'
import $swal from './swal'
import { getStringWidth } from './needImortFunc'

export function myTypeof(v: any): string {
	let str = Object.prototype.toString.call(v)
	return str.replace(/\[object |]/g, '')
}

// 驼峰转换下划线
export function toLine(name: string): string {
	return name.replace(/([A-Z])/g, '_$1').toLowerCase()
}

/**
 * 去掉对象属性前后空格
 */
export function trimObj(obj: Collection): Collection {
	let p = myTypeof(obj)
	if (p === 'Object') {
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				let o = myTypeof(obj[key])
				if (o === 'String') {
					obj[key] = obj[key].trim()
				} else if (o === 'Object' || o === 'Array') {
					trimObj(obj[key])
				}
			}
		}
	} else if (p === 'Array') {
		for (let i = 0, l = obj.length; i < l; i++) {
			let t = myTypeof(obj[i])
			if (t === 'String') {
				obj[i] = obj[i].trim()
			} else if (t === 'Array' || t === 'Object') {
				trimObj(obj[i])
			}
		}
	}
	return obj
}

/**
 * 清空集合
 * @param val 被清空的集合
 * @param ignoreList 不需要清理的字段集合
 * @return *
 */
export function clearObj(val: Collection, ignoreList: Array<keyof Collection | never> = []): Collection {
	if (myTypeof(val) === 'Array') {
		val.forEach((item: Collection, index: number) => {
			switch (myTypeof(item)) {
				case 'Array':
				case 'Object':
					clearObj(item)
					break
				default:
					val[index] = null
			}
		})
		return val
	} else if (myTypeof(val) === 'Object') {
		for (let key in val) {
			if (val.hasOwnProperty(key)) {
				let go = true
				for (let item of ignoreList) {
					if (item === key) {
						go = false
						break
					}
				}
				if (go) {
					switch (myTypeof(val[key])) {
						case 'Array':
						case 'Object':
							clearObj(val[key])
							break
						default:
							val[key] = null
					}
				}
			}
		}
		return val
	} else {
		return val
	}
}

/*以form-data方式提交请求数据时，$fetch的config参数值*/
export const formDataHeadConfig = {
	headers: {
		'Content-Type': 'multipart/form-data'
	}
}

/*将普通对象转换成form-data请求参数格式*/
export function toFormData(data: Record<string, any>): FormData {
	let temp = new FormData()
	for (let key in data) {
		if (data.hasOwnProperty(key) && data[key] !== null) {
			temp.append(key, data[key])
		}
	}
	return temp
}

/**
 * 在目标集合中按条件查找或直接查找，返回第一个满足条件的元素或路径
 * 与findPath不同，这里的路径是完整路径（findPath省略了一些标准结构中间路径），找不到返回：false
 * @param {Array/Object} group 被查找的集合
 * @param {Function/String/Number/Boolean} condition 查找的条件或值
 * @param {Boolean} getPath 是否返回路径，默认为：false，返回找到的元素
 * @returns {*}
 */
export function findCollection(group: Collection, condition: (e: any) => boolean, getPath = false) {
	if (!group || !condition) {
		return false
	}
	let PATH
	let target: string | Collection = 'notFoundC'
	let deepSearch: Function = function (group: Collection, condition: (e: any) => boolean) {
		if (Array.isArray(group)) {
			if (myTypeof(condition) === 'Function' && condition(group)) {
				target = group
				return []
			}
			for (let e of group) {
				if (target !== 'notFoundC') {
					break
				}
				if ((myTypeof(condition) === 'Function' && condition(e)) || e === condition) {
					target = e
					return [group.indexOf(e)]
				} else if (myTypeof(e) === 'Array' || myTypeof(e) === 'Object') {
					let r = deepSearch(e, condition)
					if (r !== undefined) {
						return [group.indexOf(e), ...r]
					}
				}
			}
		} else if (myTypeof(group) === 'Object') {
			if (myTypeof(condition) === 'Function' && condition(group)) {
				target = group
				return []
			}
			for (let key in group) {
				if (target !== 'notFoundC') {
					break
				}
				if (group.hasOwnProperty(key)) {
					if ((myTypeof(condition) === 'Function' && condition(key)) || group[key] === condition) {
						target = group[key]
						return [key]
					} else if (myTypeof(group[key]) === 'Object' || myTypeof(group[key]) === 'Array') {
						let r = deepSearch(group[key], condition)
						if (r !== undefined) {
							return [key, ...r]
						}
					}
				}
			}
		}
	}
	PATH = deepSearch(group, condition)
	if (getPath) {
		return PATH || false
	}
	return target === 'notFoundC' ? false : target
}

/*判断某个值是否在集合中*/
export function oneOf(value: any, validList: any[]) {
	for (let i = 0, l = validList.length; i < l; i++) {
		if (value === validList[i]) {
			return true
		}
	}
	return false
}

/**
 * 小数位数限制，超出会返回被去掉后的值
 * @param val 原来的值
 * @param num 小数点后的位数，默认：2
 * @return {number|*}
 */
export function decimalDigitsLimit(val: number | string, num: number = 2): string | number {
	let expStr = new RegExp(`(^-?\\d+\\.\\d{${num}})(\\d+$)`)
	let valStr = (val && String(val)) || ''
	if (expStr.test(valStr)) {
		return Number(valStr.replace(expStr, '$1'))
	}
	return val
}

/*文件导出，调用后端接口以form表单提交数据下载文件*/
export function downloadFileByFormSubmit(url: string, data: PlainObject = {}, method: string = 'get'): void {
	let form = document.createElement('form')
	let body = document.getElementsByTagName('body')[0]
	body.appendChild(form)
	form.setAttribute('style', 'display:none')
	form.setAttribute('target', '')
	form.setAttribute('method', method)
	let _url = url
	if (window && window.hasOwnProperty('g')) {
		/*所有特定缩写字母开头的地址，都会被改变加上config.js（public里的全局配置文件，在index.html引入，在打包后通过更改该文件用于不
		 同环境的部署）里配置的地址变成绝对地址，如:
		 config.js里配置了 window.g={mgrURL:'http://mgr.myweb.com'}
		 请求地址 ‘/mgr/file’ 会被改变为 'http://mgr.myweb.com/file'
		 */
		// @ts-ignore
		let httpEnv = Object.keys(window.g)
			.filter((e) => e.indexOf('URL') > -1)
			.map((e) => e.replace('URL', ''))

		for (let item of httpEnv) {
			let regExp = new RegExp('^/' + item + '(?=/.*$)', 'i')
			// @ts-ignore
			if (regExp.test(url) && window.g[item + 'URL']) {
				// @ts-ignore
				_url = window.g[item + 'URL'] + url.replace(regExp, '')
				break
			}
		}
	}
	form.setAttribute('action', _url)

	if (_.isPlainObject(data)) {
		for (let key in data) {
			if (data.hasOwnProperty(key) && (data[key] || data[key] === 0 || data[key] === false || data[key] === '')) {
				let input = document.createElement('input')
				input.setAttribute('type', 'hidden')
				input.setAttribute('name', key)
				input.setAttribute('value', data[key])
				form.appendChild(input)
			}
		}

		form.submit()

		let ta: any = setTimeout(() => {
			body.removeChild(form)
			clearTimeout(ta)
			ta = null
		}, 8000)
	} else {
		console.error('请求数据格式有误，无法下载文件')
	}
}

/**
 * 文件导出功能（调用文件下载方法downloadFileByFormSubmit）
 * @param url 导出路径
 * @param data 参数
 * @param method 请求方式
 */
export function fileExport(this: any, url: string, data: PlainObject = {}, method: string = 'get'): void {
	if (
		data.hasOwnProperty('columns') &&
		(data['columns'] === '' || data['columns'] === null || data['columns'] === undefined)
	) {
		$swal.call(this, {
			title: '需要导出的列不能为空',
			type: 'warning'
		})
		return
	}
	downloadFileByFormSubmit(url, data, method)
}

/**
 * 依据列显示设置缓存获取columns的key的集合
 * @param {String} sKey - 列显示设置插件的sKey
 * @param {Array} columns - 表格table的columns
 * @param {Boolean} returnArray - 是否返回数组，默认值false,返回String
 * */
export function getColumnsKeys(sKey: string, columns: any[], returnArray: boolean = false): string | string[] {
	let temp
	if (sKey && myTypeof(columns) === 'Array') {
		let names = localStorage.getItem(sKey)
		if (names) {
			let t = JSON.parse(decodeURI(names))
			temp = columns.filter((e) => e.key && t.indexOf(e.title) !== -1).map((e) => e.key)
		} else {
			temp = columns.map((e) => e.key)
		}
	} else {
		temp = []
	}
	if (!returnArray) {
		temp = String(temp)
	}
	return temp
}

/**
 * 判断一个值是否为有效值，有效值：不为空即为有效
 * @param val 需要判断的值
 * @returns {boolean}
 */
export function isValidValue(val: any): boolean {
	return val !== undefined && val !== null && val !== ''
}

export function isNumberValue(val: any): boolean {
	const reg = /^-?\d+(.\d+)?$/
	return reg.test(val)
}

/**
 * 手动tooltip(table 的 column 的tooltip失效的情况下用)
 * @param {String/Array/Function} contentKey 要设置tooltip的column的key或者key组成的数组（内容按数组中key对应的内容先后拼接），
 * 或获取值的自定义逻辑（Function回调，会传入params）
 * @param {boolean} dash 在内容为空时是否以'--'代替显示
 * @param {String} jointMark 在内容为多个字段拼接时，各字段间连接符，默认没有
 * @returns {function(...[*]=)}
 */
export function tooltipManual(contentKey: string | string[] | ((params: any) => string), dash = false, jointMark = '') {
	return function (h: any, params: any) {
		let content
		if (Array.isArray(contentKey)) {
			let temp: any[] = []
			for (let item of contentKey) {
				if (isValidValue(params.row[item])) {
					temp.push(params.row[item])
				}
			}
			content = temp.join(jointMark)
		} else if (typeof contentKey === 'function') {
			content = contentKey(params)
		} else {
			content = params.row[contentKey]
		}
		let contentWidth = getStringWidth(content)
		let tdWidth = params.column._width
		if (content && contentWidth > tdWidth) {
			return h(
				'Tooltip',
				{
					style: {
						width: '100%'
					},
					props: {
						content: content,
						maxWidth: tdWidth * 2
					}
				},
				[
					h(
						'span',
						{
							style: {
								width: '100%',
								display: 'inline-block',
								'text-overflow': 'ellipsis',
								'white-space': 'nowrap',
								overflow: 'hidden',
								'vertical-align': 'top'
							}
						},
						content
					)
				]
			)
		}
		return h('span', dash && !isValidValue(content) ? '--' : content)
	}
}

/*判断集合（数组或对象）每个元素或单个变量是否是有效值*/
export function isEmptyValue(data: Collection): boolean {
	if (_.isPlainObject(data)) {
		for (let key in data) {
			if (data.hasOwnProperty(key) && isValidValue(data[key])) {
				return false
			}
		}
		return true
	} else if (Array.isArray(data)) {
		for (let item of data) {
			if (isValidValue(item)) {
				return false
			}
		}
		return true
	}
	return !isValidValue(data)
}

/*获取字符串长度，中文2，其他1（一般用于用户输入长度限制）*/
export function stringLength(str: string): number {
	if (myTypeof(str) === 'String') {
		return str.replace(/[^\x00-\xff]/g, '01').length
	} else if (myTypeof(str) === 'Number') {
		str += ''
		return str.replace(/[^\x00-\xff]/g, '01').length
	}
	return 0
}

/**
 * 按条件设置集合中指定字段的值
 * @param {Array} group 目标集合
 * @param {Function} condition 匹配条件
 * @param {String} key 要设置的字段键名
 * @param val 要设置的字段的值，或处理逻辑
 * @param {String} childKey 子集键名
 */
export function setValByOption({
	group,
	condition,
	key,
	val,
	childKey = 'children'
}: {
	group: Collection
	condition: (item: any) => boolean
	key: string
	val: any
	childKey: string
}) {
	if (
		myTypeof(group) !== 'Array' ||
		myTypeof(condition) !== 'Function' ||
		myTypeof(key) !== 'String' ||
		myTypeof(childKey) !== 'String'
	) {
		return false
	}
	group.forEach((item: any) => {
		if (condition(item)) {
			if (myTypeof(val) === 'Function') {
				item[key] = val(item[key])
			} else {
				item[key] = val
			}
		}
		if (myTypeof(item[childKey]) === 'Array' && item[childKey].length > 0) {
			setValByOption({
				group: item[childKey],
				condition,
				key,
				val,
				childKey
			})
		}
	})
}

/**
 * 是否有该权限，用于权限管理
 * @param {String} value 权限代码
 * @returns {boolean}
 */
export function hasPermission(value: string): boolean {
	let btnPermissions = sessionStorage.getItem('btnPermissions')
	if (btnPermissions) {
		return btnPermissions.split(',').indexOf(value) > -1
	}
	return false
}

/**
 * 判断一个变量是否是NaN
 * @param v 变量
 * @returns {boolean}
 */
export function isNaN(v: any): boolean {
	return myTypeof(v) === 'Number' && String(v) === 'NaN'
}

/**
 *过滤对象属性或者将对象转换成url的query字符串
 * @param {Object} data 需要处理的对象
 * @param {Boolean} toUrl 是否需要转换成url，为false时可以不传
 * @param {Boolean} keepEmptyVal 是否保留空值（用于接口置空某个字段），为false时可以不传
 * @returns {*}
 * 注意：当toUrl=false且keepEmptyVal=true时，两个参数都传比较好
 */

export function dataFilterOrToUrl(
	data: PlainObject,
	toUrl: boolean = false,
	keepEmptyVal: boolean = false
): string | PlainObject {
	if (myTypeof(data) !== 'Object') {
		return data
	}
	let _data = Object.assign(data, {})
	let url = ''
	for (let key in _data) {
		if (_data.hasOwnProperty(key)) {
			let val = _data[key]
			if (
				val === undefined ||
				val === '' ||
				(myTypeof(val) === 'String' && val.trim() === '') ||
				val === null ||
				isNaN(val)
			) {
				if (keepEmptyVal) {
					if (toUrl) {
						url += key + '=&'
					} else {
						_data[key] = ''
					}
				} else {
					delete _data[key]
				}
			} else if (toUrl) {
				url += key + '=' + val + '&'
			}
		}
	}
	if (toUrl) {
		if (url.length > 0) {
			return url.substr(0, url.length - 1)
		}
		return ''
	}
	return _data
}

/*过滤对象或数组中无效值*/
export function removeEmptyValue(data: Collection): Collection {
	let temp: Collection = {}
	if (Array.isArray(data)) {
		temp = []
		for (let item of data) {
			if (Array.isArray(item) || _.isPlainObject(item)) {
				temp.push(removeEmptyValue(item))
			} else if (isValidValue(item)) {
				temp.push(item)
			}
		}
	} else if (_.isPlainObject(data)) {
		for (let key in data) {
			if (data.hasOwnProperty(key)) {
				if (Array.isArray(data[key]) || _.isPlainObject(data[key])) {
					temp[key] = removeEmptyValue(data[key])
				} else if (isValidValue(data[key])) {
					temp[key] = data[key]
				}
			}
		}
	}
	return temp
}

/**
 *打印页面，根据后端所传递的数据生成
 * @param data
 * @return {Promise<any>}
 */
export function htmlPrint(data: string): void {
	const pWin = window.open()
	if (pWin) {
		pWin.document.write(data)
		let ta: any = setTimeout(() => {
			pWin.print()
			window.clearTimeout(ta)
			ta = null
		}, 10)
	}
}

/**
 * 查找dom元素所有兄弟
 * @param elem - 被查找的元素
 */
export function siblingElems(elem: ChildNode) {
	let nodes: any[] = []
	let _elem = elem
	while (elem.previousSibling && (elem = elem.previousSibling)) {
		if (elem.nodeType === 1) {
			nodes.push(elem)
		}
	}

	while (_elem.nextSibling && (_elem = _elem.nextSibling)) {
		if (_elem.nodeType === 1) {
			nodes.push(_elem)
		}
	}
	return nodes
}
