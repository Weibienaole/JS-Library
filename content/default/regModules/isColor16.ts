/*
<--README
<n:isColor16>
<d:验证16进制颜色>
```javascript
<p:
@param {string} val
@return boolean
>
```
README-->
*/
// 验证16进制颜色
const isColor16 = (val: string): boolean => {
  return /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(val)
}

export default isColor16