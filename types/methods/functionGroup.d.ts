/**
 * @description 公共方法集合
 * @author ricky zhangqingcq@foxmail.com
 * @created 2023.04.27
 */
import type { Collection, PlainObject } from "../public";
export declare function myTypeof(v: any): string;
export declare function toHump(name: string): string;
export declare function toLine(name: string): string;
/**
 * 去掉对象属性前后空格
 */
export declare function trimObj(obj: Collection): Collection;
/**
 * 清空集合
 * @param val 被清空的集合
 * @param ignoreList 不需要清理的字段集合
 * @return *
 */
export declare function clearObj(val: Collection, ignoreList?: Array<keyof Collection | never>): Collection;
export declare function htmlEncode(text: string): string | HTMLElement;
export declare function htmlDecode(html: string): string | null;
export declare function getFileSrc(file: File): Promise<unknown>;
export declare function getFileTypeByName(name: string): string;
export declare function isImgByFile(type: string): boolean;
export declare function getFileTypeIconByName(name: string): string;
export declare function downloadFileReaderFile(name: string, href: string): void;
export declare function fakeALinkClick(obj: Record<string, any>): void;
export declare const formDataHeadConfig: {
    headers: {
        'Content-Type': string;
    };
};
export declare function toFormData(data: Record<string, any>): FormData;
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
    pathKey: any;
    childKey?: any;
    path?: string[];
}): Collection;
/**
 * 在目标集合中按条件查找或直接查找，返回第一个满足条件的元素或路径
 * 与findPath不同，这里的路径是完整路径（findPath省略了一些标准结构中间路径），找不到返回：false
 * @param {Array/Object} group 被查找的集合
 * @param {Function/String/Number/Boolean} condition 查找的条件或值
 * @param {Boolean} getPath 是否返回路径，默认为：false，返回找到的元素
 * @returns {*}
 */
export declare function findCollection(group: Collection, condition: (e: any) => boolean, getPath?: boolean): any;
export declare function oneOf(value: any, validList: any[]): boolean;
/**
 * 小数位数限制，超出会返回被去掉后的值
 * @param val 原来的值
 * @param num 小数点后的位数，默认：2
 * @return {number|*}
 */
export declare function decimalDigitsLimit(val: number | string, num?: number): string | number;
export declare function downloadFileByFormSubmit(url: string, data?: PlainObject, method?: string): void;
/**
 * 文件导出功能（调用文件下载方法downloadFileByFormSubmit）
 * @param url 导出路径
 * @param data 参数
 * @param method 请求方式
 */
export declare function fileExport(this: any, url: string, data?: PlainObject, method?: string): void;
/**
 * 依据列显示设置缓存获取columns的key的集合
 * @param {String} sKey - 列显示设置插件的sKey
 * @param {Array} columns - 表格table的columns
 * @param {Boolean} returnArray - 是否返回数组，默认值false,返回String
 * */
export declare function getColumnsKeys(sKey: string, columns: any[], returnArray?: boolean): string | string[];
/**
 * 判断一个值是否为有效值，有效值：不为空即为有效
 * @param val 需要判断的值
 * @returns {boolean}
 */
export declare function isValidValue(val: any): boolean;
export declare function isNumberValue(val: any): boolean;
/**
 * 手动tooltip(table 的 column 的tooltip失效的情况下用)
 * @param {String/Array/Function} contentKey 要设置tooltip的column的key或者key组成的数组（内容按数组中key对应的内容先后拼接），
 * 或获取值的自定义逻辑（Function回调，会传入params）
 * @param {boolean} dash 在内容为空时是否以'--'代替显示
 * @param {String} jointMark 在内容为多个字段拼接时，各字段间连接符，默认没有
 * @returns {function(...[*]=)}
 */
export declare function tooltipManual(contentKey: string | string[] | ((params: any) => string), dash?: boolean, jointMark?: string): (h: any, params: any) => any;
export declare function getStringWidth(str: string, fontSize?: number): number;
export declare function isEmptyValue(data: Collection): boolean;
export declare function stringLength(str: string): number;
/**
 * 按条件设置集合中指定字段的值
 * @param {Array} group 目标集合
 * @param {Function} condition 匹配条件
 * @param {String} key 要设置的字段键名
 * @param val 要设置的字段的值，或处理逻辑
 * @param {String} childKey 子集键名
 */
export declare function setValByOption({ group, condition, key, val, childKey }: {
    group: Collection;
    condition: (item: any) => boolean;
    key: string;
    val: any;
    childKey: string;
}): false | undefined;
/**
 * 是否有该权限，用于权限管理
 * @param {String} value 权限代码
 * @returns {boolean}
 */
export declare function hasPermission(value: string): boolean;
/**
 * 如果值为''则将其替换为null
 * @param val 被替换的值
 * @returns {*}
 */
export declare function emptyInput(val: any): any;
/**
 * 判断一个变量是否是NaN
 * @param v 变量
 * @returns {boolean}
 */
export declare function isNaN(v: any): boolean;
/**
 *过滤对象属性或者将对象转换成url的query字符串
 * @param {Object} data 需要处理的对象
 * @param {Boolean} toUrl 是否需要转换成url，为false时可以不传
 * @param {Boolean} keepEmptyVal 是否保留空值（用于接口置空某个字段），为false时可以不传
 * @returns {*}
 * 注意：当toUrl=false且keepEmptyVal=true时，两个参数都传比较好
 */
export declare function dataFilterOrToUrl(data: PlainObject, toUrl: boolean, keepEmptyVal: boolean): string | PlainObject;
export declare function stopBubbling(e: any): void;
export declare function removeEmptyValue(data: Collection): Collection;
/**
 *打印页面，根据后端所传递的数据生成
 * @param data
 * @return {Promise<any>}
 */
export declare function htmlPrint(data: string): void;
/**
 * 查找dom元素所有兄弟
 * @param elem - 被查找的元素
 */
export declare function siblingElems(elem: ChildNode): ChildNode[];
