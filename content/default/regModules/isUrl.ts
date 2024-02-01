/*
<--README
<n:isUrl>
<d:验证链接是否有效>
```javascript
<p:
@param {string} value
@return boolean
>
```
README-->
*/
// 地址 链接
const isUrl = (val: string): boolean => {
  const str =
    '^((https|http|ftp|rtsp|mms)://)?[a-z0-9A-Z]{3}.[a-z0-9A-Z][a-z0-9A-Z]{0,61}?[a-z0-9A-Z].com|net|cn|cc (:s[0-9]{1-4})?/$'
  const reg = new RegExp(str)
  return reg.test(val)
}

export default isUrl
