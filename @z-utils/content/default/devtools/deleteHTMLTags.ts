/*
<--README
<n:deleteHTMLTags>
<d:从字符串中删除HTML / XML标签。>
```javascript
<p:
@param {string} 需要处理的HTML字符串
@return string 处理后的字符串
>
// example:
const html = '<span>i am zzy</span>'
const pureHTMLCon = deleteHTMLTags(html) // i am zzy
```
README-->
*/
const deleteHTMLTags = (str: string): string => {
  return str.replace(/<[^>]*>/g, '')
}
export default deleteHTMLTags