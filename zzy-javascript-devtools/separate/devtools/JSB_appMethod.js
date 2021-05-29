export default function JSB_appMethod(name, data = null) {
  /**
   * name: 事件名
   * data: 参数 - 仅有调app事件持有
   */
  return new Promise(function (reslove, reject) {
    if (!window.setupWebViewJavascriptBridge) return reject('请先将 JSBriged.js 引入！')
    window.setupWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler(name, data, function (result) {
        reslove(result)
      })
    })
  })
}