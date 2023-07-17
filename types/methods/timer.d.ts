/**
 * @description 可自动销毁的定时器和计时器
 * @author ricky zhangqingcq@foxmail.com
 * @created 2023.07.14
 */
/**
 * 初始化
 * @param {object} r router实例
 */
export declare const init: (r: any) => void;
export declare const setTimeout: (fn: any, time: any) => number;
export declare const setInterval: (fn: any, time: any) => number;
declare const _default: {
    init: (r: any) => void;
    setTimeout: (fn: any, time: any) => number;
    setInterval: (fn: any, time: any) => number;
};
export default _default;
