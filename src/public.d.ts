import { VNode } from 'vue'

type RichTxt = string | VNode | HTMLElement

interface PlainObject extends Object {
	[k: keyof any]: any
}

type Collection = PlainObject | PlainObject[]
