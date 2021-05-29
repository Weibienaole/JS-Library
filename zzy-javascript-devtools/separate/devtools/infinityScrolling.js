export default function infinityScrolling(dom, cb) {
  const that = this
  infinityScrolling.bol = true
  let throttleFn
  //  需要一个外界bol判断是否加载完毕 不完毕不再次触发
  if ('IntersectionObserver' in window) {
    let intersectionOb = new IntersectionObserver(entry => {
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
  // 监听滚动条要做的事情
  function monitorScroll() {
    if (!infinityScrolling.bol) return
    // 检查指定的元素在视口中是否可见
    if (elementIsVisibleInViewport(dom, true)) cb()
  }
  function elementIsVisibleInViewport(el, partiallyVisible = false) {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
      ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
      ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  }
  function throttle(func, wait, options) {
    var timeout, context, args
    // 上一次的时间点
    var previous = 0
    if (!options) options = {}
  
    var later = function () {
      previous = options.leading === false ? 0 : new Date().getTime()
      timeout = null
      func.apply(context, args)
      if (!timeout) context = args = null
    }
  
    var throttled = function () {
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
}