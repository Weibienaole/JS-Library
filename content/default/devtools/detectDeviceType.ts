/*
<--README
<n:detectDeviceType>
<d:检测移动/PC设备>
```javascript
<p:
@return 'Mobile' | 'Desktop'  移动端/PC端
>
```
README-->
*/

// 检测移动/PC设备
const detectDeviceType = (): 'Mobile' | 'Desktop' => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? 'Mobile'
    : 'Desktop'
}
export default detectDeviceType
