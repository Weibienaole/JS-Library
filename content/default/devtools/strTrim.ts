/*
<--README
<n:strTrim>
<d:去除空格>
```javascript
<p:
@param {string} 待处理字符串
@param {1 | 2 | 3 | 4}  去除空格类型 1-所有空格  2-前后空格  3-前空格 4-后空格 默认为1
@return string 处理后的内容
>
// example:
const str = ' 1233 4'
strTrim(str, 1) // 12334
```
README-->
*/
const strTrim = (str: string, type = 1 | 2 | 3 | 4): string => {
  if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) return ''
  switch (type) {
    case 1:
      return str.replace(/\s/g, '')
    case 2:
      return str.replace(/(^\s)|(\s*$)/g, '')
    case 3:
      return str.replace(/(^\s)/g, '')
    case 4:
      return str.replace(/(\s$)/g, '')
    default:
      return str
  }
}

export default strTrim