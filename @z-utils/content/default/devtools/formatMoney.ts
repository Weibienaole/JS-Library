/*
<--README
<n:formatMoney>
<d:金钱格式化，间隔点为3>
```javascript
<p:
@param {number | string} val
@return string 
>
// example:
formatMoney(12345678) // 123,456,78
```
README-->
*/
// 金钱格式化，三位加逗号
const formatMoney = (val: number | string): string => {
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export default formatMoney