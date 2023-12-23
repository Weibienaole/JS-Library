/*
<--README
<n:elementIsVisibleInViewport>
<d:检查指定的元素在视口中是否可见>
```javascript
<p:
@param {HTMLElement} el 被指定的元素
@param {boolean} partiallyVisible = false false:左右可见 true:全屏(上下左右)可见
@return 
>
// example:
elementIsVisibleInViewport(el); // 需要左右可见
elementIsVisibleInViewport(el, true); // 需要全屏(上下左右)可以见
```
README-->
*/

const elementIsVisibleInViewport = (
  el: HTMLElement,
  partiallyVisible: boolean = false
): boolean => {
  const { top, left, bottom, right } = el.getBoundingClientRect()
  const { innerHeight, innerWidth } = window
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
}
export default elementIsVisibleInViewport