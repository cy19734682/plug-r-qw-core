/**
 * @description Type definitions for plug-r-qw 2.0.0
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2023.03.07
 */

import {VNode} from "vue"

export declare class MessageBoxConfig {
  /*content:弹框内容，同iView的content*/
  content: string | VNode | HTMLElement
  /**
   * 弹框标题内容
   * @default 提示
   */
  title?: string | VNode | HTMLElement
  /**
   * 弹框高度,最小值130
   * @default 130
   */
  height?: number
  /**
   * 弹框宽度，最小值416
   * @default 416
   */
  width?: number
  /*确定按钮回调函数*/
  onOk?: () => void
  /*取消按钮回调函数*/
  onCancel?: () => void
  /**
   * 确定按钮文字
   * @default 确定
   */
  okText?: string | VNode | HTMLElement
  /**
   * 取消按钮文字
   * @default 取消
   */
  cancelText?: string | VNode | HTMLElement
  /**
   * 不展示内容开头的警告图标(非字符串内容默认不展示)
   * @default false
   */
  noWarnIcon?: boolean
  /**
   * 底部对齐方式
   * @default center
   */
  footerAlign?: string
  /**
   * 展示取消按钮
   * @default true
   */
  cancelBt?: boolean
}

export declare type RequestConfig = (/*请求地址*/url: string,/*请求数据*/data ?: any[] | object, /*错误信息，在控制台输出，方便调试*/
  msg ?: string,/*请求结果提取路径*/rPath?: string[],/*请求配置*/config?: object,/*delete方法传参模式 true:params,false:data*/
  isUrlData?: boolean) => Promise<any>

export declare interface FetchConfig {
  /*初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件*/
  init: (store: any) => void
  /*该请求插件暴露给外界的配置对象，为axios.create创建的实例对象，使用方法见axios官方网站*/
  config: any
  /*get请求*/
  get: RequestConfig
  /*post请求*/
  post: RequestConfig
  /*put请求*/
  put: RequestConfig
  /*delete请求*/
  delete: RequestConfig

  /*并发请求*/
  all<T>(values: Array<T | Promise<T>>): Promise<T[]>

  /*并发请求结果分离*/
  spread<T, R>(callback: (...args: T[]) => R): (array: T[]) => R
}

type Func = () => void
type TooltipManualFunc = (params: any) => void

export declare class SetValByOptionConfig {
  group: Array<any>
  condition: (item: any) => boolean
  key: string
  val: any
  childKey?: string
}

/*这些是挂在Vue.prototype下的方法，使用时可以直接用this.XXX方式调用*/

export interface ProtoFunc {
  $swal(option: string | object | false, text?: string | VNode | HTMLElement, icon?: string): Promise<any>

  messageBox({}: MessageBoxConfig): void

  myTypeof(v: string): string

  $fetch: FetchConfig

  trimObj<T>(obj: T): T

  clearObj<T>(obj: T, ignoreList?: string[]): T

  formDataHeadConfig: object

  toFormData(data: object): object

  oneOf(value: any, validList: any[]): boolean

  fullScreenImgByDom(src: string): void

  isValidValue(val: any): boolean

  isNumberValue(val: any): boolean

  isEmptyValue(data: object | any[]): boolean

  tooltipManual(contentKey: string | string[] | TooltipManualFunc, dash: boolean, jiontMark: string): any

  stringLength(str: string): number

  decimalDigitsLimit(/*原值*/val: number | string,/*要限制的小数位数*/ num: number): number | string

  downloadFileByFormSubmit(url: string, data?: object, method?: string): void

  $swalConfirm(title: string, text: string, icon: string, onOk: Func): Promise<any>

  setValByOption({}: SetValByOptionConfig): void

  hasPermission(value: string): boolean

  isNaN(v: any): boolean

  dataFilterOrToUrl(data: object, toUrl?: boolean, keepEmptyVal?: boolean): object | string

  setTimeout(fn: Func, time: number): number

  setInterval(fn: Func, time: number): number

  toLine(name: string): string

  fileExport(url: string, data?: object, method?: string): void

  getColumnsKeys(sKey: string, columns: any[], returnArray?: boolean): string[]

  removeEmptyValue<T>(data: T): T

  findCollection(group: any[] | object, condition: string | number | boolean | Func, getPath?: boolean): any

  htmlPrint(data: any): void

  siblingElems(elem: HTMLElement): HTMLElement
}


declare module "vue/types/vue" {
  interface Vue extends ProtoFunc {
  }
}

type FullScreenImgPreview = (src: string) => void

type ToHump = (name: string) => string

type HtmlEncode = (text: string) => HTMLElement | string

type HtmlDecode = (html: HTMLElement | string) => string

type GetFileSrc = (file: any) => any

type GetFileTypeByName = (name: string) => string

type IsImgByFile = (type: string) => boolean

type GetFileTypeIconByName = (name: string) => string

type DownloadFileReaderFile = (name: string | number, href: string) => viod

type FakeALinkClick = (obj: object) => void

type FindPath = ({}: { group: object | any[], condition: (item: any) => boolean, pathKey?: string, childKey?: string, path?: any[] }) => any[]

type GetStringWidth = (str: string, fontsize?: number) => number

type EmptyInput = (val: any) => any

type StopBubbling = (e: any) => void

/*下面是需要单独引用的库内方法*/
export interface SingleReferenceFunc {
  fullScreenImgPreview: FullScreenImgPreview

  toHump: ToHump

  htmlEncode: HtmlEncode

  htmlDecode: HtmlDecode

  getFileSrc: GetFileSrc

  getFileTypeByName: GetFileTypeByName

  isImgByFile: IsImgByFile

  getFileTypeIconByName: GetFileTypeIconByName

  downloadFileReaderFile: DownloadFileReaderFile

  fakeALinkClick: FakeALinkClick

  findPath: FindPath

  getStringWidth: GetStringWidth

  emptyInput: EmptyInput

  stopBubbling: StopBubbling
}

export const fullScreenImgPreview: FullScreenImgPreview

export const toHump: ToHump

export const htmlEncode: HtmlEncode

export const htmlDecode: HtmlDecode

export const getFileSrc: GetFileSrc

export const getFileTypeByName: GetFileTypeByName

export const isImgByFile: IsImgByFile

export const getFileTypeIconByName: GetFileTypeIconByName

export const downloadFileReaderFile: DownloadFileReaderFile

export const fakeALinkClick: FakeALinkClick

export const findPath: FindPath

export const getStringWidth: GetStringWidth

export const emptyInput: EmptyInput

export const stopBubbling: StopBubbling
