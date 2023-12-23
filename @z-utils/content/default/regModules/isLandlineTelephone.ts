/*
<--README
<n:isLandlineTelephone>
<d:验证座机电话(国内),如: 0341-86091234>
```javascript
<p:
@param {string} phone
@return boolean
>
```
README-->
*/
// 验证座机电话(国内),如: 0341-86091234
const isLandlineTelephone = (phone: string): boolean => {
  return /\d{3}-\d{8}|\d{4}-\d{7}/g.test(phone)
}

export default isLandlineTelephone