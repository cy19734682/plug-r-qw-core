/**
 * @description Type definitions for plug-r-qw 2.0.0
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2023.03.07
 */

import type {DefineComponent} from "vue"

export declare const TableColumnRConfig: {
  showSettingCheck?: boolean

  disableShowSetting?: boolean
  /**
   * 列类型，可选值为 index、selection、expand、html
   */
  type?: 'index' | 'selection' | 'expand' | 'html'

  /**
   * 列头显示文字
   */
  title?: string

  /**
   * 对应列内容的字段名
   */
  key?: string

  /**
   * 列宽
   */
  width?: number

  /**
   * 最小列宽
   */
  minWidth?: number

  /**
   * 最大列宽
   */
  maxWidth?: number

  /**
   * 对齐方式，可选值为 `left` 左对齐、`right` 右对齐和 `center` 居中对齐
   */
  align?: 'left' | 'right' | 'center'

  /**
   * 列的样式名称
   */
  className?: string

  /**
   * 列是否固定在左侧或者右侧，可选值为 `left` 左侧和 `right` 右侧
   */
  fixed?: 'left' | 'right'

  /**
   * 开启后，文本将不换行，超出部分显示为省略号
   */
  ellipsis?: boolean

  /**
   * 开启后，文本将不换行，超出部分显示为省略号，并用 Tooltip 组件显示完整内容
   */
  tooltip?: boolean

  /**
   * 配置 Tooltip 的主题，可选值为 dark 或 light
   */
  tooltipTheme?: string

  /**
   * 配置 Tooltip 的最大宽，默认是 300
   */
  tooltipMaxWidth?: number

  /**
   * 自定义渲染列，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 row、column 和 index，分别指当前行数据，当前列数据，当前行索引，详见示例。
   */
  render?: Function

  /**
   * 自定义列头显示内容，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 `column` 和 `index`，分别为当前列数据和当前列索引。
   */
  renderHeader?: Function

  /**
   * type 为 index 时可用，自定义序号
   */
  indexMethod?: Function

  /**
   * 对应列是否可以排序，如果设置为 `custom`，则代表用户希望远程排序，需要监听 Table 的 on-sort-change 事件
   */
  sortable?: boolean | 'custom'

  /**
   * 自定义排序使用的方法，接收三个参数 a 、 b 和 type，当设置 `sortable: true` 时有效。type 值为 asc 和 desc
   */
  sortMethod?: Function

  /**
   * 设置初始化排序。值为 asc 和 desc
   */
  sortType?: 'asc' | 'desc'

  /**
   * 过滤数据的选项，格式为数组，数组中每项包含 `label` 和 `value` 属性，使用过滤，必须同时配置 filterMethod
   */
  filters?: any[]

  /**
   * 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示
   */
  filterMethod?: Function

  /**
   * 数据过滤的选项是否多选
   */
  filterMultiple?: boolean

  /**
   * 在初始化时使用过滤，数组，值为需要过滤的 value 集合
   */
  filteredValue?: any[]

  /**
   * 使用远程过滤
   */
  filterRemote?: Function

  /**
   * 表头分组
   */
  children?: any[]

  /**
   * 该列是否允许拖拽调整宽度，需开启 border 属性，且设置 width
   */
  resizable?: boolean

  /**
   * 指定该列为显示展开/收起图标，树形数据时使用
   */
  tree?: boolean

  /**
   * 使用 slot 自定义列时，列的渲染模式。可选值为 block、inline、inline-block，当使用树形数据时，建议使用 inline 或 inline-block
   */
  display?: string

}

export declare const BtTablePage: DefineComponent<{
  url?: string

  searchData?: object

  columns?: any[]

  dataHandler?: (r: object | any[]) => object

  selection?: boolean

  radio?: boolean

  selectionFixed?: 'left' | 'right' | false

  rowClickSelect?: boolean

  data?: any[]

  pageSize?: number

  sortable?: 'custom' | ''

  initData?: boolean

  highlightRow?: boolean

  rowClickNum?: number

  tableEmptyTdHandle?: boolean

  noBorderTable?: boolean

  noPage?: boolean

  orderDefault?: string

  orderKey?: string

  orderKeyFormat?: 'underline' | 'camelcase'

  getDataLoading?: boolean

  showTopRow?: boolean

  lightHead?: boolean

  pageComponentSize?: string
}>
