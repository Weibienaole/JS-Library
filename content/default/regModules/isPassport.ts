/*
<--README
<n:isPassport>
<d:验证护照（包含香港、澳门）>
```javascript
<p:
@param {string} value
@return boolean
>
```
README-->
*/
// 验证护照（包含香港、澳门）
const isPassport = (val: string): boolean => {
  return /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/g.test(
    val
  )
}

export default isPassport