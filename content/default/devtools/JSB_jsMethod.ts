/*
<--README
<n:JSB_jsMethod>
<d:app 调用 js 方法 交互事件注册>
```javascript
<p:
@param {string} 事件方法
@return Promise<data> data-> app提供的参数
>
// example:
JSB_jsMethod('openModel').then(() => {
  this.openModel()
})
```
README-->
*/

// app 调用 js 方法
/**
 * name: 事件名
 */

declare const window: Window & {
  WebViewJavascriptBridge: any
  WVJBCallbacks: any
  setupWebViewJavascriptBridge: any
}
const JSB_jsMethod = (name: string) => {
  return new Promise(function (reslove, reject) {
    if (!window.setupWebViewJavascriptBridge)
      return reject('请先将 JSB_init 方法引入！')
    window.setupWebViewJavascriptBridge((bridge: any) => {
      bridge.registerHandler(name, (data: any) => {
        reslove(data)
      })
    })
  })
}
export default JSB_jsMethod
