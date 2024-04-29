/**
 * @description 可自动销毁的定时器和计时器
 * @author ricky zhangqingcq@foxmail.com
 * @created 2023.07.14
 */

let timeoutBox: any[] = []
let intervalBox: any[] = []
/**
 * 初始化
 * @param {object} r router实例
 */
export const init = function (r: any) {
	if (r && r.beforeEach) {
		r.beforeEach(() => {
			timeoutBox.map((e) => {
				window.clearTimeout(e)
			})
			intervalBox.map((e) => {
				window.clearInterval(e)
			})
			timeoutBox.length = 0
			intervalBox.length = 0
		})
	} else {
		console.warn(
			'安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})'
		)
	}
}

export const setTimeout = function (fn: () => void, time: number): number {
	let handler = window.setTimeout(fn, time)
	timeoutBox.push(handler)
	return handler
}

export const setInterval = function (fn: () => void, time: number): number {
	let handler = window.setInterval(fn, time)
	intervalBox.push(handler)
	return handler
}

export default {
	init,
	setTimeout,
	setInterval
}
