/**
 * @description Type definitions for plug-r-qw 2.0.0
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2023.03.07
 */

import {PluginObject} from 'vue'
import {ProtoFunc, SingleReferenceFunc} from './plug-r-qw.methods'

interface PlugRQw extends PluginObject<any>, ProtoFunc, SingleReferenceFunc {
  version: string
}

declare const plugRQw: PlugRQw

export default plugRQw
