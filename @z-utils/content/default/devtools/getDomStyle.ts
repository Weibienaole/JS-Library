/*
<--README
<n:getDomStyle>
<d:返回指定元素的生效样式>
```javascript
<p:
@param {HTMLElement} 指定的元素
@param {any} 指定的样式
@return string
>
// example:
getDomStyle(document.querySelector('p'), 'font-size') // 14px
```
README-->
*/

// 返回指定元素的生效样式
// getDomStyle(document.querySelector('p'), 'font-size')
const getDomStyle = (el: HTMLElement, ruleName: string): string => {
  return getComputedStyle(el)[ruleName]
}
export default getDomStyle
