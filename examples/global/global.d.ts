export {}
declare module 'vue' {
	interface ComponentCustomProperties {
		pageSizes: number[]
	}

	interface ComponentCustomProps {
		transferClassName?: string
		transfer?: boolean
		type?: string
		model?: Record<string, any>
		clearable?: boolean
	}
}

declare global {
	interface Window {
		g: Record<string, any>
		_AMapSecurityConfig: Record<string, any>
		AMapSecure: string
		ActiveXObject: (type: string) => void
	}
}
