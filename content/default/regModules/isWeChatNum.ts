/*
<--README
<n:isWeChatNum>
<d:验证微信号>
<d:6至20位，以字母开头，字母，数字，减号，下划线>
```javascript
<p:
@param {string} value
@return boolean
>
```
README-->
*/
// 验证微信号，6至20位，以字母开头，字母，数字，减号，下划线
const isWeChatNum = (val: string): boolean => {
  return /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(val)
}

export default isWeChatNum
