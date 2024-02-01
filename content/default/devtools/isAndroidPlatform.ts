/*
<--README
<n:isAndroidPlatform>
<d:当前设备是否是 android>
```javascript
<p:
@return boolean 是否为安卓系统
>
```
README-->
*/

// 当前设备是否是 android
const isAndroidPlatform = (): boolean => {
  const u = navigator.userAgent
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
  return isAndroid
}
export default isAndroidPlatform
