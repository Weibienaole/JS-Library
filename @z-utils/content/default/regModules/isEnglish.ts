/*
<--README
<n:isEnglish>
<d:是否全部为英文>
```javascript
<p:
@param {string} dom
@return boolean
>
```
README-->
*/
// 英文
const isEnglish = (val: string): boolean => {
  let reg = /^[a-zA-Z]+$/
  return reg.test(val)
}

export default isEnglish
