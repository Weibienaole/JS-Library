/*
<--README
<n:isThunderLink>
<d:验证迅雷链接>
```javascript
<p:
@param {string} url
@return boolean
>
```
README-->
*/
// 验证迅雷链接
const isThunderLink = (val: string): boolean => {
  return /^thunderx?:\/\/[a-zA-Z\d]+=$/g.test(val)
}

export default isThunderLink
