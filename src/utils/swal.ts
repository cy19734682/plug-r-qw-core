/**
 * @description 提示框
 * @author ricky zhangqingcq@foxmail.com
 * @created 2023.05.08
 */

import swal from 'sweetalert'
import { myTypeof } from './globalFunc'
import { t } from '../locale'

type ButtonC = { text?: string; className?: string; value?: boolean | null; visible?: boolean }
type ButtonS = { cancel: ButtonC; confirm: ButtonC }

/**
 * $swal实例
 * @param {object|string|boolean} option object:{title:'标题',content(or text):'内容，可以为空',type(or icon):'success(or error
 *   or warning)'}---string:'标题'---boolean:关闭$swal窗体
 * @param {string} text 当option为object时不传此变量，当option为string时该变量为'内容'
 * @param {string} icon 当option为object时不传此变量，当option为string时该变量为弹出框类型'success'/'error'/'warning'
 */
export default function $swal(
	this: any,
	option:
		| string
		| {
				title?: string
				content?: string
				text?: string | HTMLElement
				type?: string
				icon?: string
				onOk?: () => void
				className?: string
				buttons?: ButtonS | Array<string>
		  }
		| boolean,
	text?: string | HTMLElement,
	icon?: string
) {
	const T = (...arg: Parameters<typeof t>) => t.apply(this, arg)

	return new Promise((r, j) => {
		if (typeof option === 'object' && !Array.isArray(option)) {
			let okTxt = T('r.confirm')
			let cancelTxt = T('r.cancel')
			let cancelVisible = false
			let okClass = 'swalConfirmBt'
			let cancelClass = 'swalCancelBt'
			const reg = /^HTML.*Element$/

			option.type && (option.icon = option.type) && delete option.type
			option.content && (option.text = option.content) && delete option.content
			option.className = option.className || 'swalBoxX'

			let t = ''
			if (option.text && reg.test(myTypeof(option.text))) {
				t = 'content'
			} else if (option.text && myTypeof(option.text) === 'String') {
				t = 'text'
			}

			if (option.buttons) {
				if (typeof option.buttons === 'object' && !Array.isArray(option.buttons)) {
					if (option.buttons.cancel) {
						option.buttons.cancel.text && (cancelTxt = option.buttons.cancel.text) && (cancelVisible = true)
						option.buttons.cancel.className && (cancelClass = option.buttons.cancel.className)

						option.buttons.confirm.text && (okTxt = option.buttons.confirm.text)
						option.buttons.confirm.className && (okClass = option.buttons.confirm.className)
					}
				} else if (Array.isArray(option.buttons)) {
					if (option.buttons[0]) {
						cancelTxt = option.buttons[0]
						cancelVisible = true
					}
					if (option.buttons[1]) {
						okTxt = option.buttons[1]
					}
				}
			}
			swal({
				title: option.title,
				icon: option.icon,
				className: option.className,
				[t]: option.text,
				buttons: {
					confirm: {
						text: okTxt,
						value: true,
						visible: true,
						className: okClass
					},
					cancel: {
						text: cancelTxt,
						value: null,
						visible: cancelVisible,
						className: cancelClass
					}
				}
			})
				.then((res) => {
					if (res && typeof option.onOk === 'function') {
						option.onOk()
					}
					r(res)
				})
				.catch((err) => {
					j(err)
				})
		} else if (typeof option === 'string') {
			let t = ''
			if (text) {
				switch (typeof text) {
					case 'string':
						t = 'text'
						break
					case 'object':
						t = 'content'
						break
				}
			}
			swal({
				title: option,
				[t]: text || '',
				icon: icon || '',
				className: 'swalBoxX',
				buttons: {
					confirm: {
						text: T('r.confirm'),
						value: true,
						visible: true,
						className: 'swalConfirmBt',
						closeModal: true
					}
				}
			})
				.then((res) => {
					r(res)
				})
				.catch((err) => {
					j(err)
				})
		} else if (typeof option === 'boolean') {
			if (!option && swal.close) {
				swal.close()
			}
		} else {
			throw new TypeError('swal第一个参数类型有误，仅支持Object/String/false')
		}
	})
}
