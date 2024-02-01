/*
<--README
<n:formateSeconds>
<d:格式化 天:时:分:秒>
```javascript
<p:
@param {number | string} dosurPlusTimem 剩余时间戳 - 单位为 s
@return string dd:hh:mm:ss
>
// example:
formateSeconds(86400) // 01:00:00:00
formateSeconds(3600) // 00:01:00:00
```
README-->
*/

import { IFormateSeconds } from "../../../typings/devtools"

// 格式化 天:时:分:秒 参数 - 剩余时间戳 - 单位为 S
const formateSeconds: IFormateSeconds = (surPlusTime) => {
  let secondTime = 0
  if (typeof surPlusTime === 'string') {
    secondTime = parseInt(surPlusTime) // 将传入的秒的值转化为Number
  }
  let min = 0 // 初始化分
  let h = 0 // 初始化小时
  let d = 0 // 初始化天
  let result = ''
  if (secondTime > 60) {
    //如果秒数大于60，将秒数转换成整数
    min = Math.floor(secondTime / 60) //获取分钟，除以60取整数，得到整数分钟
    secondTime = Math.floor(secondTime % 60) //获取秒数，秒数取佘，得到整数秒数
    if (min > 60) {
      //如果分钟大于60，将分钟转换成小时
      h = Math.floor(min / 60) //获取小时，获取分钟除以60，得到整数小时
      min = Math.floor(min % 60) //获取小时后取佘的分，获取分钟除以60取佘的分
      if (h > 23) {
        d = Math.floor(h / 24) // 获取天，获取分钟除以24，得到整数天
        h = Math.floor(h % 24) // 获取天后取佘的小时，获取时除24取佘的时
      }
    }
  }
  result = `${d.toString().padStart(2, '0')}:${h
    .toString()
    .padStart(2, '0')}:${min.toString().padStart(2, '0')}:${secondTime
    .toString()
    .padStart(2, '0')}`
  return result
  // return 00:00:00:00
}

export default formateSeconds