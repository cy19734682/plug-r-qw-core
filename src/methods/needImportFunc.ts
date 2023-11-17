/**
 * @description 公共方法集合，需要单独引用才能使用
 * @author ricky zhangqingcq@foxmail.com
 * @created 2023.07.14
 */
import type { Collection } from '../public'
import { isObject, isFunction, isPlainObject, cloneDeep, isEmpty } from 'lodash-es'
import { myTypeof } from './globalFunc'

// 下划线转换驼峰
export function toHump(name: string): string {
	return name.replace(/_(\w)/g, function (all, letter) {
		return letter.toUpperCase()
	})
}

/*用浏览器内部转换器实现html转码*/
export function htmlEncode(text: string): string | HTMLElement {
	//1.首先动态创建一个容器标签元素，如DIV
	let temp = document.createElement('div')
	//2.然后将要转换的字符串设置为这个元素的innerText(ie支持)或者textContent(火狐，google支持)
	temp.textContent !== undefined ? (temp.textContent = text) : (temp.innerText = text)
	//3.最后返回这个元素的innerHTML，即得到经过HTML编码转换的字符串了
	return temp.innerHTML
}

/*用浏览器内部转换器实现html解码*/
export function htmlDecode(html: string): string | null {
	//1.首先动态创建一个容器标签元素，如DIV
	let temp = document.createElement('div')
	//2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
	temp.innerHTML = html
	//3.最后返回这个元素的innerText(ie支持)或者textContent(火狐，google支持)，即得到经过HTML解码的字符串了。
	return temp.innerText || temp.textContent
}

/*根据file文件对象获取文件地址用来预览*/
export function getFileSrc(file: File) {
	return new Promise((resolve) => {
		let reader = new FileReader()
		reader.readAsDataURL(file) // 读出 base64
		reader.onloadend = () => {
			resolve(reader.result)
		}
	})
}

/*获取后缀名*/
export function getFileTypeByName(name: string): string {
	return name?.split('.').pop()!.toLocaleLowerCase() || ''
}

/*判断是否为图片（type是否包含‘image’）*/
export function isImgByFile(type: string): boolean {
	return myTypeof(type) === 'String' && type.indexOf('image') > -1
}

/*根据文件名获取图标（上传组件用）*/
export function getFileTypeIconByName(name: string): string {
	const format = getFileTypeByName(name)
	let type = 'ios-document-outline'

	if (['gif', 'jpg', 'jpeg', 'png', 'bmp', 'webp'].indexOf(format) > -1) {
		type = 'ios-image'
	} else if (['mp4', 'm3u8', 'rmvb', 'avi', 'swf', '3gp', 'mkv', 'flv'].indexOf(format) > -1) {
		type = 'ios-film'
	} else if (['mp3', 'wav', 'wma', 'ogg', 'aac', 'flac'].indexOf(format) > -1) {
		type = 'ios-musical-notes'
	} else if (['doc', 'txt', 'docx', 'pages', 'epub', 'pdf'].indexOf(format) > -1) {
		type = 'md-document'
	} else if (['numbers', 'csv', 'xls', 'xlsx'].indexOf(format) > -1) {
		type = 'ios-stats'
	} else if (['keynote', 'ppt', 'pptx'].indexOf(format) > -1) {
		type = 'ios-videocam'
	}

	return type
}

/*下载一个文件（替换容易被浏览器屏蔽的window.open方法）*/
export function downloadFileReaderFile(name: string, href: string): void {
	let saveLink = document.createElement('a')
	saveLink.href = href
	saveLink.download = name
	fakeALinkClick(saveLink)
}

/*模拟被点击（比如模拟用户点击链接下载东西）*/
export function fakeALinkClick(obj: Record<string, any>): void {
	let ev = document.createEvent('MouseEvents')
	ev.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
	obj.dispatchEvent(ev)
}

/**
 * 按条件查找一个元素在集合中的位置（路径），返回找到的第一个符合条件的位置
 * 仅适用于[{children:[{...},...],...},...]类似树结构集合（最外层也可以是一个对象）或一维数组
 * @param {Array/Object} group - 集合，被查找的集合，必填
 * @param {Function/String/Number/Boolean} condition - 查找条件，为常量时，将常量和集合元素直接对比，必填
 * @param {String} pathKey - 查找结果（路径）元素在集合中的key，在集合为数组时，可以不填，返回index（索引）
 * @param {String} childKey - 集合子元素的key，默认值 children
 * @param {Array} path - 递归用参数，逻辑内部参数，不用传
 * @return {Array} 返回带有路径（层级）信息的数组
 * @example group: {id:1,name:'爸爸',children:[{id:2,name:'大儿子'},{id:3,name:'二儿子'}]}
 *          condition: e=>e.id === 3
 *          pathKey: 'name'
 *          childKey: 'children'
 *
 *          返回：['爸爸','二儿子']
 */
export function findPath({
	group,
	condition,
	pathKey,
	childKey = 'children',
	path = []
}: {
	group: Collection
	condition: (item: any) => boolean
	pathKey?: any
	childKey?: any
	path?: string[]
}): Array<string | number> {
	if (group && isObject(group)) {
		if (isFunction(condition)) {
			if (isPlainObject(group)) {
				let item = group
				let temp = cloneDeep(path)
				if (condition(item)) {
					if (pathKey && item[pathKey]) {
						temp.push(item[pathKey])
					}
					return temp
				} else if (item[childKey] && !isEmpty(item[childKey])) {
					if (pathKey && item[pathKey]) {
						temp.push(item[pathKey])
					}
					let rr = findPath({
						group: item[childKey],
						condition: condition,
						pathKey: pathKey,
						childKey: childKey,
						path: temp
					})
					if (!isEmpty(rr)) {
						return rr
					}
				}
			} else if (Array.isArray(group)) {
				for (let item of group) {
					let temp = cloneDeep(path)
					if (condition(item)) {
						if (pathKey && item[pathKey]) {
							temp.push(item[pathKey])
						} else {
							temp.push(String(group.indexOf(item)))
						}
						return temp
					} else if (item[childKey] && item[childKey].length > 0) {
						if (pathKey && item[pathKey]) {
							temp.push(item[pathKey])
						} else {
							temp.push(String(group.indexOf(item)))
						}
						let rr = findPath({
							group: item[childKey],
							condition: condition,
							pathKey: pathKey,
							childKey: childKey,
							path: temp
						})
						if (!isEmpty(rr)) {
							return rr
						}
					}
				}
			}
		} else if (Array.isArray(group)) {
			//条件为常量，集合为数组，这种情况只会有一种业务场景：在一维数组中查找某个常量在数组中第一次出现的index
			for (let item of group) {
				let temp = cloneDeep(path)
				if (item === condition) {
					temp.push(String(group.indexOf(item)))
					return temp
				}
			}
		}
	}
	return []
}

/*获取字符串width*/
export function getStringWidth(str: string, fontSize: number = 12): number {
	if (myTypeof(str) === 'String' && str.length > 0) {
		let nodesH = document.createElement('span')
		nodesH.style.fontSize = fontSize + 'px'
		nodesH.style.fontFamily = 'inherit'
		nodesH.innerHTML = str
		nodesH.style.opacity = '0'
		nodesH.style.position = 'fixed'
		nodesH.style.top = '3000px'
		document.body.append(nodesH)
		const width = nodesH.clientWidth
		document.body.removeChild(nodesH)
		return width
	}
	return 0
}

/**
 * 如果值为''则将其替换为null
 * @param val 被替换的值
 * @returns {*}
 */

export function emptyInput(val: any) {
	if (val === '') {
		return null
	}
	return val
}

//阻止冒泡
export function stopBubbling(e: any): void {
	e = e || window.Event
	if (e.stopPropagation) {
		//W3C阻止冒泡方法
		e.stopPropagation()
	} else {
		e.cancelBubble = true //IE阻止冒泡方法
	}
}
