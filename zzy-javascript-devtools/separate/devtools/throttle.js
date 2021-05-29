export default function throttle(func, wait, options) {
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