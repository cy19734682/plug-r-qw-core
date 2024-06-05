/**
 * @description 全屏预览
 * @author ricky zhangqingcq@foxmail.com
 * @created 2023.08.24
 * 注意：不能全局调整Modal弹框尺寸，否则预览图片可能不居中，推荐使用另一个插件fullScreenImgByDom
 */

import { Modal, Icon } from 'view-ui-plus'
import { t } from '../locale'
import { h } from 'vue'
import { setTimeout } from './timer'

export default function fullScreenImgPreview(this: any, src: string) {
	const T = (...arg: Parameters<typeof t>) => t.apply(this, arg)
	const close = T('r.closePreview')
	const fullImg = T('r.fullImg')

	let id = 'previewImg' + Math.floor(Math.random() * 10000000)
	Modal?.info?.({
		closable: false,
		'transition-names': ['linear', 'fade'],
		render: (_h: any) => {
			return h(
				'div',
				{
					class: 'previewModal',
					id: id
				},
				[
					h(
						'div',
						{
							class: 'previewModalInner'
						},
						[
							h('img', {
								src: src,
								alt: fullImg
							}),
							h(Icon, {
								type: 'md-close',
								title: close,
								class: 'previewModalDelete',
								onClick() {
									Modal?.remove?.()
								}
							})
						]
					)
				]
			)
		}
	})

	setTimeout(() => {
		const hideEl = document.getElementById(id)?.parentElement?.parentElement?.parentElement?.parentElement
		const hideEl2 = document.getElementById(id)?.parentElement?.nextSibling as HTMLElement
		hideEl && (hideEl.style.height = '0')
		hideEl && (hideEl.style.padding = '0')
		hideEl2 && (hideEl2.style.display = 'none')
	}, 10)
}
