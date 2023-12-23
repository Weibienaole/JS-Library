/*
<--README
<n:launchFullscreen>
<d:某个元素开启全屏>
```javascript
<p:
@param {HTMLDOM} 接受一个 dom 作为参数
>
// example:
launchFullscreen(document.querySelectorById('test'))
```
README-->
*/
// 某个元素开启全屏 
const launchFullscreen = (el: any): void => {
  if (el.requestFullscreen) {
    el.requestFullscreen()
  } else if (el?.mozRequestFullScreen) {
    el.mozRequestFullScreen()
  } else if (el.msRequestFullscreen) {
    el.msRequestFullscreen()
  } else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullScreen()
  }
}
export default launchFullscreen
