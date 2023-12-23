/*
<--README
<n:recoverScroll>
<d:恢复滚动条>
<d:如果配合 preventScroll 方法使用需要现将 固定前的滚动条高度记录，再恢复时赋值给 recoverScroll 方法>
```javascript
<p:
@param {number} 被恢复位置 Y
>
// example:
recoverScroll(200) y200的高度恢复，相当于滚动至200
```
README-->
*/
const recoverScroll = (scrollNum: number): void => {
  document.body.style['overflow-y' as any] = 'auto'
  document.body.style.position = 'static'
  // document.querySelector('body').style['overscroll-behavior'] = 'none'

  window.scrollTo(0, scrollNum)
}

export default recoverScroll
