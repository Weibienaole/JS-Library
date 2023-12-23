/*
<--README
<n:JSB_appMethod>
<d:js调用app方法>
```javascript
<p:
@param {string} 事件名
@param {any} 传递给app的参数
@return Promise<void>
>
// example:
JSB_appMethod(name, data).then(() => console.log('success!'))
```
README-->
*/

declare const window: Window & {
  WebViewJavascriptBridge: any
  WVJBCallbacks: any
  setupWebViewJavascriptBridge: any
}
const JSB_appMethod = (name: string, data = null) => {
  return new Promise(function (reslove, reject) {
    if (!window.setupWebViewJavascriptBridge)
      return reject('请先将 JSB_init 方法引入！')
    window.setupWebViewJavascriptBridge(function (bridge: any) {
      bridge.callHandler(name, data, function (result: any) {
        reslove(result)
      })
    })
  })
}

export default JSB_appMethod