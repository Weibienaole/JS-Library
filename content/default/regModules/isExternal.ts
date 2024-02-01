/*
<--README
<n:isExternal>
<d:判读是否为外链>
```javascript
<p:
@param {string} path
@return boolean
>
```
README-->
*/
// 判读是否为外链
const isExternal = (path: string): boolean => {
  return /^(https?:|mailto:|tel:)/.test(path)
}
export default isExternal
