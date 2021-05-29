export default function JSB_jsMethod(name) {
  return new Promise(function (reslove, reject) {
    if (!window.setupWebViewJavascriptBridge) return reject('请先将 JSBriged.js 引入！')
    window.setupWebViewJavascriptBridge((bridge) => {
      bridge.registerHandler(name, (data) => {
        reslove(data)
      })
    })
  })
}