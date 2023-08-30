/**
 * @description 基于view-ui:Modal的对话框插件
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2023.05.04
 */
import { h } from 'vue'
import type { VNode } from 'vue'
import { Modal, Button } from 'view-ui-plus'
import { myTypeof } from './globalFunc'
import { t } from '../locale'

let loading: boolean = false

/**
 * config为一个对象，支持：
 * @param {Object} options
 * @param {string|VNode} options.content 弹框内容，同iView的content,
 * @param {number} options.height 弹框高度,默认值130,最小值130
 * @param {number} options.width 弹框宽度，默认值416,最小值416
 * @param {string|html} options.title 弹框标题内容，默认值“提示”
 * @param {function} options.onOk 确定按钮回调函数
 * @param {function} options.onCancel 取消按钮回调函数
 * @param {string|html} options.okText 确定按钮文字，默认值“确定”
 * @param {string|html} options.cancelText 取消按钮文字，默认值“取消”
 * @param {boolean} options.noWarnIcon 不展示内容开头的警告图标(非字符串内容默认不展示)，默认值“false”
 * @param {string} options.footerAlign 底部对齐方式，string，默认值“center”
 * @param {boolean} options.cancelBt 展示取消按钮，boolean，默认值“true”
 * 组件中调用示例：this.messageBox({
 *                      content:'确定执行操作？'
 *                    })
 */
export default function messageBox(
	this: any,
	{
		height,
		width = 416,
		title,
		content,
		onOk,
		onCancel,
		okText,
		cancelText,
		noWarnIcon,
		footerAlign,
		cancelBt = true
	}: {
		height?: number
		width?: number
		title?: string | VNode
		content: string | VNode
		onOk?: () => void | Promise<any>
		onCancel?: () => void
		okText?: string | VNode
		cancelText?: string | VNode
		noWarnIcon?: boolean
		footerAlign?: string
		cancelBt?: boolean
	}
): void {
	const T = (...arg: Parameters<typeof t>) => t.apply(this, arg)

	let heightTemp = height && Number(height) - 90 > 100 ? Number(height) - 90 + 'px' : 0
	let heightT = heightTemp || '100px'
	let stringContent = myTypeof(content) === 'String'

	Modal.warning({
		width: width,
		footerHide: true,
		render: () => {
			return h(
				'div',
				{
					class: 'customMessageBox',
					style: {
						height: heightT
					}
				},
				[
					h(
						'div',
						{
							class: 'containerN'
						},
						[
							h(
								'div',
								{
									class: 'titleN'
								},
								[
									h('span', title || T('r.info.title')),
									h(
										Button,
										{
											class: 'fr closeN',
											type: 'text',
											onClick() {
												if (loading) {
													return
												}
												Modal.remove()
											}
										},
										() =>
											h('i', {
												class: 'ivu-icon ivu-icon-ios-close',
												style: {
													fontSize: '30px'
												}
											})
									)
								]
							),
							h(
								'div',
								{
									class: 'contentN',
									style: {
										textAlign: stringContent ? 'center' : 'left'
									}
								},
								[
									h('i', {
										class: stringContent && !noWarnIcon ? 'ivu-icon ivu-icon-ios-alert-outline' : 'hide',
										style: {
											fontSize: '60px',
											color: '#f8bb86'
										}
									}),
									h('div', { class: 'msgBoxConO' }, content || T('r.info.text'))
								]
							),
							h(
								'div',
								{
									class: 'footerN',
									style: {
										textAlign: footerAlign || 'center'
									}
								},
								[
									h(
										Button,
										{
											class: 'okBtN',
											onClick(e: any) {
												if (onOk && typeof onOk === 'function') {
													const p = onOk()
													if (p && myTypeof(p) === 'Promise') {
														loading = true
														const el = e?.currentTarget || e?.target
														if (el) {
															el.classList?.add?.('ivu-btn-loading')
															el.nextSibling?.setAttribute?.('disabled', 'disabled')
															const c = el.parentElement?.parentElement?.querySelector?.('.titleN .closeN')
															c.classList?.add?.('disabled')
														}
														Promise.resolve(p)
															.then(() => {
																loading = false
																Modal.remove()
															})
															.catch(() => {
																loading = false
																Modal.remove()
															})
													} else {
														Modal.remove()
													}
												}
											}
										},
										() => [
											h('i', {
												class: 'ivu-load-loop ivu-icon ivu-icon-ios-loading'
											}),
											h('span', okText || T('r.confirm'))
										]
									),
									h(
										Button,
										{
											class: ['cancelBtN', !cancelBt && 'hide'],
											onClick() {
												if (loading) {
													return
												}
												Modal.remove()
												if (myTypeof(onCancel) === 'Function') {
													onCancel && onCancel()
												}
											}
										},
										() => cancelText || T('r.cancel')
									)
								]
							)
						]
					)
				]
			)
		}
	})
}
