/*
<--README
<n:isIMEI>
<d:验证手机机身码(IMEI)>
```javascript
<p:
@param {string} imei
@return boolean
>
```
README-->
*/
// 验证手机机身码(IMEI)
const isIMEI = (val: string): boolean => {
  return /^\d{15,17}$/g.test(val)
}

export default isIMEI