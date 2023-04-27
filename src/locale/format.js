/**
 * plug-r-qw 国际化
 * created at 2023.04.27
 * @author Ricky email:zhangqingcq@foxmail.com
 */

/**
 * t('XXX',...arg)
 *  去掉XXX中双花括号，或替换%{XXX}为arg[XXX]，arg为t('XXX',...arg)中arg
 *  如果XXX没有花括号，则返回XXX本身
 */

const RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g

export default function () {
  function hasOwn(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key)
  }
  
  /**
   * template
   *
   * @param {String} string
   * @param {Array} args
   * @return {String}
   */
  
  function template(string, ...args) {
    if (args.length === 1 && typeof args[0] === 'object') {
      args = args[0]
    }
    
    if (!args || !args.hasOwnProperty) {
      args = {}
    }
    if (string === undefined) {
      return ''
    }
    
    return string.replace(RE_NARGS, (match, prefix, i, index) => {
      let result
      
      if (string[index - 1] === '{' && string[index + match.length] === '}') {
        return i
      } else {
        result = hasOwn(args, i) ? args[i] : null
        if (result === null || result === undefined) {
          return ''
        }
        
        return result
      }
    })
  }
  
  return template
}

