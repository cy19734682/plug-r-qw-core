/**
 * @description Type definitions for plug-r-qw 2.0.0
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2023.03.07
 */

import type {DefineComponent} from "vue"

export declare const AsyncCascader: DefineComponent<{
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
}>
