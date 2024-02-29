/**
 * @description 虚拟微型数据库
 * @author ricky zhangqingcq@foxmail.com
 * @created 2021.07.02
 */

let _data = {}
let idCount = {}

/**
 * 增
 * @param {String} table 目标table名字
 * @param {Array} data 要增加的数据
 * @private
 */
exports._save = function (table, data) {
	if (!_data[table]) {
		_data[table] = []
		idCount[table] = 0
	}
	let b = data.map((e, i) => {
		return Object.assign(e, { id: ++idCount[table] })
	})
	b.reverse()
	_data[table].unshift(...b)
	return true
}

/**
 * 删
 * @param {String} table 目标table名字
 * @param {Function} condition 条件
 * @returns {boolean} 是否成功
 * @private
 */
exports._delete = function (table, condition) {
	if (!_data[table]) {
		return false
	}
	_data[table] = _data[table].filter((e) => !condition(e))
	return true
}
/**
 * 查
 * @param {String} table 目标table名字
 * @param {Number} current 当前页
 * @param {Number} size 每页条数
 * @param {Function} condition 条件
 * @returns {*}
 * @private
 */
exports._get = function (table, current, size, condition) {
	if (!_data[table]) {
		return {
			data: [],
			total: 0
		}
	}
	let b = _data[table]
	if (condition) {
		b = b.filter(condition)
	}
	return {
		data: size === -1 ? b : b.slice((current - 1) * size, current * size),
		total: b.length
	}
}
/**
 * 改
 * @param {String} table 目标table名字
 * @param {Object} data 要改的单条数据
 * @returns {boolean} 是否成功
 * @private
 */
exports._edit = function (table, data) {
	if (!_data[table] || !data.hasOwnProperty('id')) {
		return false
	}
	for (let i = 0, len = _data[table].length; i < len; i++) {
		if (_data[table][i].id === data.id) {
			_data[table][i] = data
			return true
		}
	}
	return false
}
