/*
<--README
<n:isHttpAndPort>
<d:验证必须带端口号的网址(或ip)>
```javascript
<p:
@param {string} port
@return boolean
>
```
README-->
*/
// 验证必须带端口号的网址(或ip)
const isHttpAndPort = (val: string): boolean => {
  return /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/g.test(val)
}
export default isHttpAndPort
