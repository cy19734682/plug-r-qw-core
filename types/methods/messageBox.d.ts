import type { VNode } from 'vue';
/**
 * config为一个对象，支持：
 * @param {Object} options
 * @param {string|VNode} options.content 弹框内容，同iView的content,
 * @param {number} options.height 弹框高度,默认值130,最小值130
 * @param {number} options.width 弹框宽度，默认值416,最小值416
 * @param {string|html} options.title 弹框标题内容，默认值“提示”
 * @param {function} options.onOk 确定按钮回调函数
 * @param {function} options.onCancel 取消按钮回调函数
 * @param {function} options.onClose 关闭（右上角叉叉）按钮回调函数
 * @param {string|html} options.okText 确定按钮文字，默认值“确定”
 * @param {string|html} options.cancelText 取消按钮文字，默认值“取消”
 * @param {boolean} options.noWarnIcon 不展示内容开头的警告图标(非字符串内容默认不展示)，默认值“false”
 * @param {string} options.footerAlign 底部对齐方式，string，默认值“center”
 * @param {boolean} options.cancelBt 展示取消按钮，boolean，默认值“true”
 * 组件中调用示例：this.messageBox({
 *                      content:'确定执行操作？'
 *                    })
 */
export default function messageBox(this: any, { height, width, title, content, onOk, onCancel, onClose, okText, cancelText, noWarnIcon, footerAlign, cancelBt }: {
    height?: number;
    width?: number;
    title?: string | VNode;
    content: string | VNode;
    onOk?: () => void | Promise<any>;
    onCancel?: () => void;
    onClose?: () => void;
    okText?: string | VNode;
    cancelText?: string | VNode;
    noWarnIcon?: boolean;
    footerAlign?: string;
    cancelBt?: boolean;
}): void;
