/*
<--README
<n:isLicensePlateNumber>
<d:验证车牌号(新能源+非新能源)>
```javascript
<p:
@param {string} val
@return boolean
>
```
README-->
*/
// 验证车牌号(新能源+非新能源)
const isLicensePlateNumber = (val: string): boolean => {
  return /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/g.test(
    val
  )
}
export default isLicensePlateNumber
