/*
<--README
<n:isPassword>
<d:密码校验>
<d:a-z A-Z 0-9  long 6 < val < 21>
```javascript
<p:
@param {string} value
@return boolean
>
```
README-->
*/
// 密码 a-z A-Z 0-9  long 6 < val < 21
const isPassword = (val: string): boolean => {
  let reg = /^[a-zA-Z0-9_]+$/
  return reg.test(val) && val.length > 5 && val.length < 21
}

export default isPassword
