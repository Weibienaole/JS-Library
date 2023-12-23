/*
<--README
<n:isVersion>
<d:验证版本号格式必须为X.Y.Z>
```javascript
<p:
@param {string} value
@return boolean
>
```
README-->
*/
// 验证版本号格式必须为X.Y.Z
const isVersion = (val: string): boolean => {
  return /^\d+(?:\.\d+){2}$/g.test(val)
}
export default isVersion
