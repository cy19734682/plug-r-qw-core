type AmapR = { securityJsCode: string; key: string }
let _amap: AmapR = { securityJsCode: '', key: '' }

export function set({ securityJsCode, key }: AmapR): void {
	_amap.securityJsCode = securityJsCode
	_amap.key = key
}

export function get(d: 'securityJsCode' | 'key'): string {
	return _amap[d]
}
