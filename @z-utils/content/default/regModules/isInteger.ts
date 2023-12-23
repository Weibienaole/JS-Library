/*
<--README
<n:isInteger>
<d:是否为整数>
```javascript
<p:
@param {string} dom
@return boolean
>
```
README-->
*/
// 整数
const isInteger = (val: string): boolean => {
  let reg = /^[-+]?\d*$/
  return reg.test(val)
}

export default isInteger
