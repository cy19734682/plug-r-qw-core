/// <reference types="vite/client" />
/// <reference types="./examples/global/global"/>

declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	const component: DefineComponent<{}, {}, any>

	export default component
}
