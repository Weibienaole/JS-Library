/*
<--README
<n:preventScroll>
<d:固定滚动条>
<d:功能描述：一些业务场景，如弹框出现时，需要禁止页面滚动，这是兼容安卓和 iOS 禁止页面滚动的解决方案>
```javascript
<p:
@param {number} y轴 Number 需要被定位的 y 或者不传，默认 window.scrollY
@return number 当前被定住的 y 
>
// example:
preventScroll
```
README-->
*/
const preventScroll = (scrollNum: number): number => {
  // 存储当前滚动位置
  scrollNum = scrollNum || window.scrollY

  // 将可滚动区域固定定位，可滚动区域高度为 0 后就不能滚动了
  document.body.style['overflow-y' as any] = 'hidden'
  document.body.style.position = 'fixed'
  document.body.style.width = '100%'
  document.body.style.top = -scrollNum + 'px'
  // document.body.style['overscroll-behavior'] = 'none'
  return scrollNum
}
export default preventScroll
