/**
 * @description plug-r-qw 源代码入口文件
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2023.04.27
 */
import type { App } from 'vue';
export * from './components';
import localeFile from './locale';
export { default as fetch } from './methods/fetch';
export * from './methods/globalFunc';
export * from './methods/needImortFunc';
export { default as messageBox } from './methods/messageBox';
export { default as swal } from './methods/swal';
export { default as swalConfirm } from './methods/swalConfirm';
export { setInterval, setTimeout } from './methods/timer';
declare const _default: {
    locale: typeof localeFile.use;
    i18n: typeof localeFile.i18n;
    install: (app: App<any>, options?: Record<string, any>) => void;
};
export default _default;
