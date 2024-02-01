/*
<--README
<n:isEmptyObject>
<d:判断对象是否为空>
```javascript
<p:
@param {object} 目标对象
@return boolean
>
// example:
if(isEmptyObject(obj)) return
// ...some code
```
README-->
*/
// 判断对象是否为空
/*
  example:
  if(isEmptyObject(obj)) return
*/
const isEmptyObject = (obj: object): boolean => {
  return !obj || Object.keys(obj).length === 0
}
export default isEmptyObject