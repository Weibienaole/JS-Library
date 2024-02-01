/*
<--README
<n:typeOf>
<d:增强版typeOf>
<d:typeOf 关键字对于null，date 都会认为是Object，不准确, 使用Object.prototype.toString.call>
```javascript
<p:
@param {any} 判断值
@return string
>
```
README-->
*/
const typeOf = (data: any): string => {
  let res = Object.prototype.toString.call(data).split(' ')[1]
  return res.slice(0, res.length - 1)
}

export default typeOf