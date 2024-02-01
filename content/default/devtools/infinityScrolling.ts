/*
<--README
<n:infinityScrolling>
<d:无限滚动>
<d:回调第一行必须设置 infinityScrollIng 的bol 属性为 false，意味着已经进程已经开始，必须等待结束(失败或者成功)才可以重新为true，才可以进行下一次的回调触发>
<d:react具体实现组件为 ScrollLoadingBar>
```javascript
<p:
@param {HTMLElement} 目标节点
@param {Function} 当目标节点出现在可是区域内后出发此回调。以此实现无限滚动
@param {可选：关闭监听(只有在监听滚动条时才会有效，否则无效，可忽略(针对低版本浏览器启用监听滚动条方式进行处理))} devtools.infinityScrollIng.closeMonitor()
@return 
>
// example:
devtools.infinityScrollIng(document.querySelector('.bottomScrollBar'), ()=>{
// 回调第一行必须设置 infinityScrollIng 的bol 属性为 false，意味着已经进程已经开始，必须等待结束(失败或者成功)才可以重新为true，才可以进行下一次的回调触发
devtools.infinityScrollIng.bol = false
//  ...some code
devtools.infinityScrollIng.bol = true // done
})
```
README-->
*/
import { IInfinityScrolling, IThrottle } from '../../../typings/devtools'

const infinityScrolling: IInfinityScrolling = (
  dom: HTMLElement,
  cb: Function
) => {
  // 监听滚动条要做的事情
  const monitorScroll = () => {
    if (!infinityScrolling.bol as boolean) return
    // 检查指定的元素在视口中是否可见
    if (elementIsVisibleInViewport(dom, true)) cb()
  }
  const elementIsVisibleInViewport = (
    el: HTMLElement,
    partiallyVisible = false
  ) => {
    const { top, left, bottom, right } = el.getBoundingClientRect()
    const { innerHeight, innerWidth } = window
    return partiallyVisible
      ? ((top > 0 && top < innerHeight) ||
          (bottom > 0 && bottom < innerHeight)) &&
          ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
  }
  const throttle: IThrottle = (func, wait, options = {}) => {
    var timeout: any, context: any, args: any
    // 上一次的时间点
    var previous = 0

    var later = function () {
      previous = options.leading === false ? 0 : new Date().getTime()
      timeout = null
      func.apply(context, args)
      if (!timeout) context = args = null
    }

    var throttled: any = function () {
      // 拿到当前时间的时间戳
      var now = new Date().getTime()
      // 如果 上一次时间为0 且 不设置立即执行，将当前时间赋值给上次时间
      if (!previous && options.leading === false) previous = now
      // 当前空档时间 设定等待值 - (当前 - 上一次时间)
      var remaining = wait - (now - previous)
      context = this
      args = arguments
      // console.log(arguments, 'arguments');
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout)
          timeout = null
        }
        previous = now
        func.apply(context, args)
        if (!timeout) context = args = null
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining)
      }
    }

    throttled.cancel = function () {
      clearTimeout(timeout)
      previous = 0
      timeout = null
    }
    return throttled
  }

  infinityScrolling.bol = true
  let throttleFn: any
  //  需要一个外界bol判断是否加载完毕 不完毕不再次触发
  if ('IntersectionObserver' in window) {
    let intersectionOb = new IntersectionObserver((entry) => {
      if (!infinityScrolling.bol) return
      // 1 - 可视范围内 0 - 不在可视范围内
      if (entry[0].intersectionRatio) cb()
    })
    // 对 dom 启用监听
    intersectionOb.observe(dom)
  } else {
    // 启用节流 100ms
    throttleFn = throttle(monitorScroll, 100)
    // 开启监听
    document.addEventListener('scroll', throttleFn)
  }
  // 关闭监听 scroll监听时
  infinityScrolling.closeMonitor = function () {
    if ('IntersectionObserver' in window) return
    // 关闭节流
    throttleFn.cancel()
    // 取消监听
    document.removeEventListener('scroll', throttleFn)
  }
}

export default infinityScrolling
