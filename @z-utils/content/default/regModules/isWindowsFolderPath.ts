/*
<--README
<n:isWindowsFolderPath>
<d:验证window"文件夹"路径>
```javascript
<p:
@param {string} value
@return boolean
>
```
README-->
*/
// 验证window"文件夹"路径
const isWindowsFolderPath = (val: string): boolean => {
  return /^[a-zA-Z]:\\(?:\w+\\?)*$/g.test(val)
}
export default isWindowsFolderPath