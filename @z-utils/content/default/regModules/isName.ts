/*
<--README
<n:isName>
<d:是否为汉字（姓名）>
```javascript
<p:
@param {string} name
@return boolean
>
```
README-->
*/
// 姓名
const isName = (name: string): boolean => {
  let ChinaTxtReg = new RegExp('^[\u4e00-\u9fa5]+$')
  return ChinaTxtReg.test(name)
}

export default isName
