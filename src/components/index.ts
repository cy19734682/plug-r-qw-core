/**
 * @description 组件 md 文档 导出
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2023.04.27
 */

const modules: Record<string, any> = import.meta.glob('./**/*.md', {
	eager: true,
	as: 'raw'
})

let mds: Record<string, any> = {}

for (const path in modules) {
	if (modules.hasOwnProperty(path)) {
		const _p: string = path.replace(/^\.\/(\w*)\/.*\.md$|^\.\/(\w*)\.md$/, '$1$2')
		mds[_p] = modules[path]
	}
}

export default mds
