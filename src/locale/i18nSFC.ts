import { t } from './index'
import { getCurrentInstance } from 'vue'

export default function (...args: Parameters<typeof t>) {
	const proxy = getCurrentInstance()?.appContext.config.globalProperties
	return t.apply(proxy, args)
}
