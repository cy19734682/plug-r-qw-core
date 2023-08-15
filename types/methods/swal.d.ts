/**
 * @description 提示框
 * @author ricky zhangqingcq@foxmail.com
 * @created 2023.05.08
 */
type ButtonC = {
    text?: string;
    className?: string;
    value?: boolean | null;
    visible?: boolean;
};
type ButtonS = {
    cancel: ButtonC;
    confirm: ButtonC;
};
/**
 * $swal实例
 * @param {object|string|boolean} option object:{title:'标题',content(or text):'内容，可以为空',type(or icon):'success(or error
 *   or warning)'}---string:'标题'---boolean:关闭$swal窗体
 * @param {string} text 当option为object时不传此变量，当option为string时该变量为'内容'
 * @param {string} icon 当option为object时不传此变量，当option为string时该变量为弹出框类型'success'/'error'/'warning'
 */
export default function (this: any, option: string | {
    title?: string;
    content?: string;
    text?: string | HTMLElement;
    type?: string;
    icon?: string;
    onOk?: () => void;
    className?: string;
    buttons?: ButtonS | Array<string>;
} | boolean, text?: string | HTMLElement, icon?: string): Promise<unknown>;
export {};
