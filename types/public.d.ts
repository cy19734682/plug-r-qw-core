export declare interface PlainObject extends Object {
	[k: keyof any]: any
}

export declare type Collection = PlainObject | PlainObject[]
