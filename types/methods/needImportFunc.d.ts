/**
 * @description 公共方法集合，需要单独引用才能使用
 * @author ricky zhangqingcq@foxmail.com
 * @created 2023.07.14
 */
import type { Collection } from '../public';
export declare function toHump(name: string): string;
export declare function htmlEncode(text: string): string | HTMLElement;
export declare function htmlDecode(html: string): string | null;
export declare function getFileSrc(file: File): Promise<unknown>;
export declare function getFileTypeByName(name: string): string;
export declare function isImgByFile(type: string): boolean;
export declare function getFileTypeIconByName(name: string): string;
export declare function downloadFileReaderFile(name: string, href: string): void;
export declare function fakeALinkClick(obj: Record<string, any>): void;
/**
 * 按条件查找一个元素在集合中的位置（路径），返回找到的第一个符合条件的位置
 * 仅适用于[{children:[{...},...],...},...]类似树结构集合（最外层也可以是一个对象）或一维数组
 * @param {Array/Object} group - 集合，被查找的集合，必填
 * @param {Function/String/Number/Boolean} condition - 查找条件，为常量时，将常量和集合元素直接对比，必填
 * @param {String} pathKey - 查找结果（路径）元素在集合中的key，在集合为数组时，可以不填，返回index（索引）
 * @param {String} childKey - 集合子元素的key，默认值 children
 * @param {Array} path - 递归用参数，逻辑内部参数，不用传
 * @return {Array} 返回带有路径（层级）信息的数组
 * @example group: {id:1,name:'爸爸',children:[{id:2,name:'大儿子'},{id:3,name:'二儿子'}]}
 *          condition: e=>e.id === 3
 *          pathKey: 'name'
 *          childKey: 'children'
 *
 *          返回：['爸爸','二儿子']
 */
export declare function findPath({ group, condition, pathKey, childKey, path }: {
    group: Collection;
    condition: (item: any) => boolean;
    pathKey?: any;
    childKey?: any;
    path?: string[];
}): Array<string | number>;
export declare function getStringWidth(str: string, fontSize?: number): number;
/**
 * 如果值为''则将其替换为null
 * @param val 被替换的值
 * @returns {*}
 */
export declare function emptyInput(val: any): any;
export declare function stopBubbling(e: any): void;
