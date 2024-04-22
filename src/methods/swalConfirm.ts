/**
 * @description 提示框
 * @author ricky zhangqingcq@foxmail.com
 * @created 2023.05.09
 */

import $swal from './swal'
import { t } from '../locale'

export default function $swalConfirm(this: any, title: string, text: string, icon: string, onOk: () => void) {
	const T = (...arg: Parameters<typeof t>) => t.apply(this, arg)
	$swal.call(this, {
		title: title || T('r.info.title'),
		text: text || T('r.info.text'),
		icon: icon || 'warning',
		onOk: onOk,
		buttons: [T('r.cancel')]
	})
}
