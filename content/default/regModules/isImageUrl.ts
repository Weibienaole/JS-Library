/*
<--README
<n:isImageUrl>
<d:验证图片链接地址>
<d:图片格式可按需增删>
```javascript
<p:
@param {string} src
@return boolean
>
```
README-->
*/
const isImageUrl = (val: string): boolean => {
  return /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.test(
    val
  )
}
export default isImageUrl
