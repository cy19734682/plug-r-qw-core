import type { RichTxt } from '../public';
/**
 * config为一个对象，支持：
 * @param {string/html} content:弹框内容，同iView的content,
 * @param {number} height:弹框高度,默认值130,最小值130
 * @param {number} width:弹框宽度，默认值416,最小值416
 * @param {string/html} title:弹框标题内容，默认值“提示”
 * @param {function} onOk:确定按钮回调函数
 * @param {function} onCancel:取消按钮回调函数
 * @param {string/html} okText:确定按钮文字，默认值“确定”
 * @param {string/html} cancelText:取消按钮文字，默认值“取消”
 * @param {boolean} noWarnIcon:不展示内容开头的警告图标(非字符串内容默认不展示)，默认值“false”
 * @param {string} footerAlign:底部对齐方式，string，默认值“center”
 * @param {boolean} cancelBt:展示取消按钮，boolean，默认值“true”
 * 组件中调用示例：this.messageBox({
 *                      content:'确定执行操作？'
 *                    })
 */
export default function messageBox(this: any, { height, width, title, content, onOk, onCancel, okText, cancelText, noWarnIcon, footerAlign, cancelBt }: {
    height?: number;
    width?: number;
    title?: RichTxt;
    content: RichTxt;
    onOk?: () => void;
    onCancel?: () => void;
    okText?: RichTxt;
    cancelText?: RichTxt;
    noWarnIcon?: boolean;
    footerAlign?: string;
    cancelBt?: boolean;
}): void;
