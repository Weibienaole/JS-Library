/*
<--README
<n:formatNowTime>
<d:时间戳转化为当前时间>
```javascript
<p:
@param {number | string} time
@return string YYYY-MM-DD hh:mm:ss
>
// example:
formatNowTime(now Date().valueOf()) // 2023-12-20 17:31:22
```
README-->
*/

import { IFormatNowTime } from "../../../typings/devtools"

// 时间戳转化为当前时间
const formatNowTime: IFormatNowTime = (time) => {
  function add0(m: number) {
    return m < 10 ? '0' + m : m
  }
  if (typeof time === 'string') {
    time = parseInt(time) // 将传入的秒的值转化为Number
  }
  const newtime = new Date(time)
  var y = newtime.getFullYear()
  var m = newtime.getMonth() + 1
  var d = newtime.getDate()
  var h = newtime.getHours()
  var mm = newtime.getMinutes()
  var s = newtime.getSeconds()
  return (
    y +
    '-' +
    add0(m) +
    '-' +
    add0(d) +
    ' ' +
    add0(h) +
    ':' +
    add0(mm) +
    ':' +
    add0(s)
  )
}

export default formatNowTime