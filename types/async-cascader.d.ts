/**
 *Type definitions for plug-r-qw 2.0.0
 * created at 2023.03.07
 * @author Ricky email:zhangqingcq@foxmail.com
 */

import Vue from "vue"

export declare class AsyncCascader extends Vue {
  valProp?: any[] | number | string

  url?: string

  optionVal?: string

  optionLabel?: string

  optionFilter?: (d: object | any[]) => any

  separator?: string

  onlyLastVal?: boolean

  onlyLastLabel?: boolean

  filterable?: boolean

  placeholder?: string

  disabled?: boolean
}
