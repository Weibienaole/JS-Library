/*
<--README
<n:isPhone>
<d:手机号>
```javascript
<p:
@param {string} value
@return boolean
>
```
README-->
*/
// 手机号
const isPhone = (phone: string): boolean => {
  return /^1(3\d|4\d|5\d|6\d|7\d|8\d|9\d)\d{8}$/g.test(phone)
}

export default isPhone