/**
 *Type definitions for plug-r-qw 2.0.0
 * created at 2023.03.03
 * @author Ricky email:zhangqingcq@foxmail.com
 */

import {PluginObject} from 'vue'
import {ProtoFunc, SingleReferenceFunc} from './plug-r-qw.methods'

interface PlugRQw extends PluginObject<any>, ProtoFunc, SingleReferenceFunc {
  version: string
}

declare const plugRQw: PlugRQw

export default plugRQw
