/**
 * @description 示例项目的NodeJS服务器（接口）
 * @author ricky zhangqingcq@foxmail.com
 * @created 2023.03.20
 */

const { _save } = require('./database.cjs')

const selectScrollMoreData = require('./data/selectScrollMore.cjs')
const btTablePageData = require('./data/btTablePage.cjs')

module.exports = function () {
	_save('select-scroll-more', selectScrollMoreData.data)
	_save('bt-table-page', btTablePageData.data)
}
