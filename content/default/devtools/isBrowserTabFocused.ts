/*
<--README
<n:isBrowserTabFocused>
<d:检查当前标签页是否活动>
```javascript
<p:
@return boolean 是否活动
>
```
README-->
*/
// 检查当前标签页是否活动
const isBrowserTabFocused = (): boolean => {
  return !document.hidden
}

export default isBrowserTabFocused
