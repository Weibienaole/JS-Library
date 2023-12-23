/*
<--README
<n:isMoney>
<d:价格、金额  带小数的正数，小数点后最多两位>
```javascript
<p:
@param {string} value
@return boolean
>
```
README-->
*/
// 价格、金额  带小数的正数，小数点后最多两位
const isMoney = (val: string): boolean => {
  const reg = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/
  return reg.test(val)
}

export default isMoney
