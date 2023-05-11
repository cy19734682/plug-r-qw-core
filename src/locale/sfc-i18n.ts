import {t} from './index'
import {getCurrentInstance} from "vue"

export default function (...args:Parameters<typeof t>){
  const proxy = getCurrentInstance()!.proxy
  return t.apply(proxy,args)
}
