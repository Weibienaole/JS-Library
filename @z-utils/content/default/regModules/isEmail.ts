/*
<--README
<n:isEmail>
<d:邮件 email>
```javascript
<p:
@param {string} value
@return boolean
>
```
README-->
*/
// 邮件 email
const isEmail = (val: string): boolean => {
  let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  return reg.test(val)
}
export default isEmail
