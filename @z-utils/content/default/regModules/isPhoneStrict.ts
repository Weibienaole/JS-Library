/*
<--README
<n:isPhoneStrict>
<d:验证手机号中国(严谨), 根据工信部2019年最新公布的手机号段>
```javascript
<p:
@param {string} value
@return boolean
>
```
README-->
*/
// 验证手机号中国(严谨), 根据工信部2019年最新公布的手机号段
const isPhoneStrict = (phone: string): boolean => {
  return /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/g.test(
    phone
  )
}
export default isPhoneStrict
