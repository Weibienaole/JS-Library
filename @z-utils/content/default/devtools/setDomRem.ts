/*
<--README
<n:setDomRem>
<d:rem实现>
<d:rem*16px>
<d:以蓝湖rem设置为标准 设置16px的rem就是 *8>
```javascript
<p:
@param {number = 8} 比例
>
// example:
setDomRem(16) 1:32(蓝狐设计图)
```
README-->
*/
// rem*16px(以蓝湖rem设置为标准 设置16px的rem就是 *8)
const setDomRem = (num = 8) => {
  ;(function (designWidth, maxWidth) {
    var doc = document,
      win = window
    var docEl = doc.documentElement
    var tid: NodeJS.Timeout
    var rootItem: any, rootStyle

    function refreshRem() {
      var width = docEl.getBoundingClientRect().width
      if (!maxWidth) {
        maxWidth = 540
      }
      if (width > maxWidth) {
        width = maxWidth
      }
      //与淘宝做法不同，直接采用简单的rem换算方法1rem=100px
      var rem = (width * +num) / designWidth
      //兼容UC开始
      rootStyle = 'html{font-size:' + rem + 'px !important}'
      rootItem =
        document.getElementById('rootsize') || document.createElement('style')
      if (!document.getElementById('rootsize')) {
        document.getElementsByTagName('head')[0].appendChild(rootItem)
        rootItem.id = 'rootsize'
      }
      if (rootItem.styleSheet) {
        rootItem.styleSheet.disabled ||
          (rootItem.styleSheet.cssText = rootStyle)
      } else {
        try {
          rootItem.innerHTML = rootStyle
        } catch (f) {
          rootItem.innerText = rootStyle
        }
      }
      //兼容UC结束
      docEl.style.fontSize = rem + 'px'
    }
    refreshRem()

    win.addEventListener(
      'resize',
      function () {
        clearTimeout(tid) //防止执行两次
        tid = setTimeout(refreshRem, 300)
      },
      false
    )

    win.addEventListener(
      'pageshow',
      function (e) {
        if (e.persisted) {
          // 浏览器后退的时候重新计算
          clearTimeout(tid)
          tid = setTimeout(refreshRem, 300)
        }
      },
      false
    )

    if (doc.readyState === 'complete') {
      doc.body.style.fontSize = '16px'
    } else {
      doc.addEventListener(
        'DOMContentLoaded',
        function (e) {
          doc.body.style.fontSize = '16px'
        },
        false
      )
    }
  })(375, 750)
}

export default setDomRem
