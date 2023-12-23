/*
<--README
<n:getUrlData>
<d:获取目标地址参数>
```javascript
<p:
@param {string} 地址
@return { [key: string]: string }
>
// example:
const url = https://www.baidu.com/s?ie=UTF-8&wd=github
getUrlData(url) // { ie: 'UTF-8', wd: 'github' }
```
README-->
*/
// 获取地址栏参数
const getUrlData = (url: string): { [key: string]: string } => {
  if (url.slice(url.length - 2, url.length) === '#/')
    url = url.slice(0, url.length - 2)
  let o: {[key: string]: any} = {}
  let params = url.split('?')[1]
  if (!params) return {}
  params.split('&').map((item) => {
    let r = item.split('=')
    const key = r[0]
    o[key] = r[1]
  })
  return o
}

export default getUrlData