/**
 * @created 2024.03.14
 * @author Ricky email:zhangqingcq@foxmail.com
 * @description 表格打印，可以在预览页面调整每列宽度以及可以选择打印的列
 * 注意：1.该插件依赖于vue-router，需要在安装库时传入router，详见该库使用说明文档；
 * 2.打印时会新开一个浏览器窗口，路由为'/tablePrint'，该路由页面需要铺满浏览器窗口，即该路由所在的router-view外部
 * 不应有任何dom元素渲染在页面上（隐藏的多余dom元素不影响打印）。
 * 3.由于内容较多时需要分页打印，所以需要在打印页面的html、body、div[data-v-app]上添加样式，该插件会自动添加这些样式，
 * 如果页面这些dom节点已经存在类似样式，该插件会覆盖已存在的样式（只会影响打印页面，无需担心其他页面被污染）
 * 4.虽然插件有调节列宽的功能，但为了用户使用方便，开发人员应该在columns里设置好适合的列宽（minWidth或width）,
 * 让打印页面打开时就具备较好的打印布局效果。
 */
declare function init(router: any): void;
/**
 * 供外部使用的打印API
 * @param {Array} columns Table的列设置，同view-design
 * @param {Array} data Table的数据
 * @param {String} title 标题(如打印为PDF将是默认文件名)
 * @param {Object} config 打印设置，目前支持：1.customClass,用于定制打印页面样式；2.autoPrint,是否直接打印
 */
declare function print(columns: any[], data: any[], title?: string, config?: Record<string, any>): void;
declare const _default: {
    init: typeof init;
    print: typeof print;
};
export default _default;
