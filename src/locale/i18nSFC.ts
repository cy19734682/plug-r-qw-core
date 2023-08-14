import { t } from './index'
import { getCurrentInstance } from 'vue'

export default function (path: string, options?: Record<keyof any, any> | Array<string | number>) {
	const proxy = getCurrentInstance()?.appContext.config.globalProperties
	return t.apply(proxy, [path, options])
}
