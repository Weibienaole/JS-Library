/*
<--README
<n:debounce>
<d:防抖>
```javascript
<p:
@param {function} 执行函数 
@param {number} wait 间隔时间(ms)
@return function 设置防抖后的函数
>
// example:
const fn = () => {
  ++a
}
const debounceFn = debounce(fn, 300)

// 执行 debounceFn 即可
```
README-->
*/

import { IDebounce } from '../../../typings/devtools'

// 防抖 执行函数,间隔时间,是否立即执行一次
const debounce: IDebounce = (func, wait) => {
  let timer: NodeJS.Timeout
  return function (...args: any) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
      clearTimeout(timer)
    }, wait)
  }
}

export default debounce
