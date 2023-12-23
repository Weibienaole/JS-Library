/*
<--README
<n:exitFullscreen>
<d:关闭全屏模式>
```javascript
```
README-->
*/

// 关闭全屏模式
const exitFullscreen = (): void => {
  let dom: any = document
  if (dom.exitFullscreen) {
    dom.exitFullscreen()
  } else if (dom.msExitFullscreen) {
    dom.msExitFullscreen()
  } else if (dom.mozCancelFullScreen) {
    dom.mozCancelFullScreen()
  } else if (dom.webkitExitFullscreen) {
    dom.webkitExitFullscreen()
  }
}

export default exitFullscreen