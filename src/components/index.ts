/**
 * 组件MD文档导出
 * created at 2023.04.27
 * @author Ricky email:zhangqingcq@foxmail.com
 */

const modules = import.meta.glob('./**/*.md', {eager: true})

let mds = {}

for (const path in modules) {
  if (modules.hasOwnProperty(path)) {
    const _p = path.replace(/^\.\/(\w*)\/.*\.md$|^\.\/(\w*)\.md$/, '$1$2')
    mds[_p] = modules[path]
  }
}

export default mds
