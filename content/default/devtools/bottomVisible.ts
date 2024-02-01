/*
<--README
<n:bottomVisible>
<d:检查页面底部是否可见>
```javascript
<p:
@return boolean
>
```
README-->
*/
// 检查页面底部是否可见
const bottomVisible = (): boolean => {
  return (
    document.documentElement.clientHeight + window.scrollY >=
    (document.documentElement.scrollHeight ||
      document.documentElement.clientHeight)
  )
}

export default bottomVisible
