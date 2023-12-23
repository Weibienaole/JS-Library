/*
<--README
<n:isWindowsFilePath>
<d: 验证window下"文件"路径>
```javascript
<p:
@param {string} value
@return boolean
>
```
README-->
*/
// 验证window下"文件"路径
const isWindowsFilePath = (val: string): boolean => {
  return /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/g.test(val)
}
export default isWindowsFilePath
