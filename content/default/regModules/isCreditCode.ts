/*
<--README
<n:isCreditCode>
<d:验证统一社会信用代码>
```javascript
<p:
@param {string} calue
@return boolean
>
```
README-->
*/
// 验证统一社会信用代码
const isCreditCode = (val: string): boolean => {
  return /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/g.test(val)
}

export default isCreditCode