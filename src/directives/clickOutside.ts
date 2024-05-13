import { isClient } from '../utils/globalFunc'

export default {
	beforeMount(el: any, binding: any) {
		function documentHandler(e: any) {
			if (el.contains(e.target)) {
				return false
			}
			binding?.value?.(e)
		}

		el.__vueClickOutside__ = documentHandler
		isClient && document.addEventListener('click', documentHandler)
	},
	unmounted(el: any) {
		isClient && document.removeEventListener('click', el.__vueClickOutside__)
		delete el.__vueClickOutside__
	}
}
