import type { SlateDescendant } from '@wangeditor/editor'
import type { VNode } from 'vue'

declare module '@wangeditor/editor' {
	// 扩展 Text
	interface SlateText {
		text: string
	}

	// 扩展 Element
	interface SlateElement {
		type: string
		children: SlateDescendant[]
	}
}

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
		filterable?: boolean
		icon?: string
		autosize?: Record<string, any>
		password?: boolean
		showWordLimit?: boolean
		placeholder?: string
	}
}

declare global {
	interface Window {
		g: Record<string, any>
		_AMapSecurityConfig: Record<string, any>
		AMapSecure: string
		ActiveXObject: (type: string) => void
		wangeditorMenuInit: boolean
	}
}

export interface PlainObject extends Object {
	[k: keyof any]: any
}

export type Collection = PlainObject | PlainObject[]

export interface TreeNode {
	[k: string]: any

	children?: TreeNode[]
}

export type PredicateFunc = (d: any) => boolean

export type RenderFunc = (h: any) => VNode

export interface Option {
	label?: string

	val?: string | number
	/*待选项图标，仅checkbox和checkboxGroup支持，view-design的内置图标*/
	icon?: string

	disabled?: boolean

	[x: string]: any
}

export type showFunc = (valGroup: Record<string, any>) => boolean

export interface FormItem {
	activeChange?: boolean

	addTime?: boolean

	append?: string

	asyncOption?: boolean

	autoSize?: boolean | { minRows?: number; maxRows?: number }

	booleanVal?: boolean

	borrowOption?: string

	buttonType?: boolean

	changeOnSelect?: boolean

	changeOption?: boolean | { valKey: string; key: string } | { valKey: string; key: string; notRequired?: boolean }[]

	class?: string

	clearable?: boolean

	collectLabel?: { valKey: string; key: string } | { valKey: string; key: string }[]

	data?: object

	dateType?: string

	dateOption?: object

	defaultVal?: any

	defaultVal2?: any

	disabled?: boolean

	disabledOptionByOthers?: string | string[]

	editable?: boolean

	editorConfig?: object

	filterable?: boolean

	format?: string | string[]

	height?: number | string

	icon?: string

	itemBorder?: boolean

	key?: string

	key2?: string

	label?: string

	length?: number

	level?: number

	likeInput?: boolean

	localOption?: any[]

	manualUpload?: boolean

	mapHeight?: string

	max?: number

	maxLength?: number

	maxSize?: number

	min?: number

	mode?: string

	multiple?: boolean

	numberVal?: boolean

	onlyLasVal?: boolean

	onlyLastLabel?: boolean

	options?: Option[]

	optionFilter?: <T>(d: T) => T

	optionLabel?: string | string[]

	optionUrl?: string

	optionVal?: string

	password?: boolean

	placeholder?: string

	precision?: number

	prefix?: string

	prepend?: string

	readonly?: boolean

	separator?: string

	show?: { key: string; val: any[] } | { key: string; val: any[] }[] | showFunc

	showImg?: boolean

	showMap?: boolean

	showOr?: boolean

	showWodLimit?: boolean

	slotName?: string

	slotPosition?: string

	step?: number

	steps?: number[]

	suffix?: string

	title?: string

	toolbarConfig?: object

	type: string

	url?: string

	val?: any

	valKey?: string

	withCredentials?: boolean

	uploadImgMaxSize?: number

	uploadImgMaxLength?: number

	uploadImgShowBase64?: boolean

	uploadImgServe?: object

	[x: string]: any
}
