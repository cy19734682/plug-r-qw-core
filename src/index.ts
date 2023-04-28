/**
 * @description plug-r-qw 源代码入口文件
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2023.04.27
 */
const modules:Record<string, any> = import.meta.glob('./components/**/*.vue', {eager: true})
import localeFile from './locale'

import pkg from '../package.json'

let components:Record<string, any> = {}

for (const path in modules) {
  if (modules.hasOwnProperty(path)) {
    const _p = path.replace(/^\.\/.*\/(\w*)\/.*\.vue$|^\.\/.*\/(\w*)\.vue$/, '$1$2')
    components[_p] = modules[path].default
  }
}

const install = function (app:any, options:Record<string, any> = {}) {
  if (options.locale) {
    localeFile.use(options.locale)
  }

  if (options.i18n) {
    localeFile.i18n(options.i18n)
  }

  Object.keys(components).forEach(key => {
    app.component(key, components[key])
  })
}

const version = pkg.version

const locale = localeFile.use

const i18n = localeFile.i18n

export default {
  version,
  locale,
  i18n,
  install
}
