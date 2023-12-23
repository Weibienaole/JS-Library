/*
<--README
<n:smoothScroll>
<d:滚动到指定元素区域>
<d:该代码段可将指定元素平滑滚动到浏览器窗口的可见区域。>
```javascript
<p:
@param {keyof HTMLElementTagNameMap} 指定的dom
>
// example:
smoothScroll11('#fooBar')
```
README-->
*/
const smoothScroll = (el: keyof HTMLElementTagNameMap) => {
  document.querySelector(el)?.scrollIntoView({
    behavior: 'smooth'
  })
}

export default smoothScroll
