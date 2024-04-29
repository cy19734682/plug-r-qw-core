/**
 * @description 全屏预览，原生dom技术
 * @author ricky zhangqingcq@foxmail.com
 * @created 2023.08.23
 */

import { first } from 'lodash-es'
import { t } from '../locale'

export default function fullScreenImgByDom(this: any, src: string) {
	const T = (...arg: Parameters<typeof t>) => t.apply(this, arg)

	const close = T('r.closePreview')
	const fullImg = T('r.fullImg')
	let bodyEl = first(document.getElementsByTagName('body'))
	let child = document.createElement('div')
	child.setAttribute('class', 'fullScreenImgByDom')
	child.innerHTML = `<div class='previewInner'><img src='${src}' alt='${fullImg}' ><i class='ivu-icon ivu-icon-md-close' title='${close}' ></i></div>`
	child.querySelector('.ivu-icon-md-close')?.addEventListener?.('click', function () {
		let bb = first(document.getElementsByTagName('body'))
		bb?.removeChild?.(child)
	})
	bodyEl?.appendChild?.(child)
}
