/*
<--README
<n:copyToClipboard>
<d:将字符串复制到剪贴板>
```javascript
<p:
@param {string} 拷贝内容
>
// example:
copyToClipboard('Lorem ipsum') // 'Lorem ipsum' copied to clipboard
```
README-->
*/
const copyToClipboard = (str: string): void => {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  const selected =
    (document.getSelection()?.rangeCount as number) > 0
      ? document.getSelection()?.getRangeAt(0)
      : false
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  if (selected) {
    document.getSelection()?.removeAllRanges()
    document.getSelection()?.addRange(selected)
  }
}

export default copyToClipboard
