/*
<--README
<n:getScrollPosition>
<d:取当前页面的滚动位置>
```javascript
<p:
@param {Window | HTMLElement} 可选元素，默认Window位置
@return { x: number; y: number } 当前位置
>
// example:
getScrollPosition(); // {x: 0, y: 200}
```
README-->
*/
import {
  IGetScrollPosition,
  IGetScrollPositionWin
} from '../../../typings/devtools'

// 返回 {x: , y: }
const getScrollPosition: IGetScrollPosition = (el = window) => {
  return {
    x:
      (el as IGetScrollPositionWin).pageXOffset !== undefined
        ? (el as IGetScrollPositionWin).pageXOffset
        : (el as HTMLElement).scrollLeft,
    y:
      (el as IGetScrollPositionWin).pageYOffset !== undefined
        ? (el as IGetScrollPositionWin).pageYOffset
        : (el as HTMLElement).scrollTop
  } as { x: number; y: number }
}
export default getScrollPosition
