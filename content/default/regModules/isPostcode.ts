/*
<--README
<n:isPostcode>
<d:验证邮政编码(中国)>
```javascript
<p:
@param {string} value
@return boolean
>
```
README-->
*/
// 验证邮政编码(中国)
const isPostcode = (val: string): boolean => {
  return /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(
    val
  )
}

export default isPostcode
