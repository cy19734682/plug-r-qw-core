/**
 * @description 公共方法集合
 * @author ricky zhangqingcq@foxmail.com
 * @created 2023.04.27
 */
export function myTypeOf(v: any): string {
    let str = Object.prototype.toString.call(v)
    return str.replace(/\[object|]]/g, '')
}