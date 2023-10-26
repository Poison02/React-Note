/**
 * 复制别人网站中的svg，然后转化svg中style属性的字符串为模板字符串中的对象
 * @param styleStr
 * @returns {{}}
 */
function styleStrToObject(styleStr) {
  const obj = {}
  const s = styleStr.toLowerCase().replace(/-(.)/g, function (m, g) {
    return g.toUpperCase();
  }).replace(/;\s?$/g,"").split(/:|;/g)
  for (var i = 0; i < s.length; i += 2) {
    obj[s[i].replace(/\s/g,"")] = s[i+1].replace(/^\s+|\s+$/g,"")
  }

  return obj
}

export default styleStrToObject
