/*
<--README
<n:throttle>
<d:节流>
```javascript
<p:
@param {Function} func 执行函数
@param {Number} wait 间隔时间 ms
@param { leading?: boolean,trailing?: boolean } 可选options
{leading: 调用后是否立即执行一次,trailing: 结束后是否还要执行一次} 默认都为true，但都不能为false
@return  Function
>
// example:
const fn = (n) => {
  a += n
}
const throttleFn = throttle((n) => fn(n))
```
README-->
*/
import { IThrottle } from "../../../typings/devtools"

// 节流 执行函数,间隔时间,设置{leading: 调用后是否立即执行一次,trailing: 结束后是否还要执行一次} 默认都为true，但都不能为false
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

export default throttle
