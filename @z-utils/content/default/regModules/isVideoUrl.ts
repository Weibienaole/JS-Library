/*
<--README
<n:isVideoUrl>
<d:验证视频链接地址>
```javascript
<p:
@param {string} value
@return boolean
>
```
README-->
*/
// 验证视频链接地址（视频格式可按需增删）
const isVideoUrl = (val: string): boolean => {
  return /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i.test(
    val
  )
}
export default isVideoUrl