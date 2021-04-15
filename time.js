// 时间格式转化年
export function changeTimeYear(now) {
  const time = new Date(now)
  const year = time.getFullYear()
  const month = time.getMonth() + 1
  const date = time.getDate()
  return (
    year +
    '-' +
    (month >= 10 ? month : '0' + month) +
    '-' +
    (date >= 10 ? date : '0' + date) +
    ' '
  )
}
// 时间格式转化小时
export function changeTimeHour(now) {
  const time = new Date(now)
  const hour = time.getHours()
  const minter = time.getMinutes()
  const second = time.getSeconds()
  return (
    (hour >= 10 ? hour : '0' + hour) +
    ':' +
    (minter >= 10 ? minter : '0' + minter) +
    ':' +
    (second >= 10 ? second : '0' + second)
  )
}
// 时间格式转化小时无秒
export function changeTimeSecond(now) {
  const time = new Date(now)
  const hour = time.getHours()
  const minter = time.getMinutes()
  return (
    (hour >= 10 ? hour : '0' + hour) +
    ':' +
    (minter >= 10 ? minter : '0' + minter)
  )
}
// 时间格式转化从年到秒
export function changeTimeYear_Second(now) {
  const time = new Date(now)
  const hour = time.getHours()
  const minter = time.getMinutes()
  let second = time.getSeconds();
  return (
    (hour >= 10 ? hour : '0' + hour) +
    ':' +
    (minter >= 10 ? minter : '0' + minter) +
    ':' +
    (second >= 10 ? second : '0' + second)
  )
}

export function TrueTime(now) {
  const time = new Date(now)
  return changeTimeYear(time) + ' ' + changeTimeHour(time)
}

export function NoDateTime(now) {
  return changeTimeYear(now)
}
export function YearMDTime(now) {
  const time = new Date(now)
  return changeTimeYear(time)
}

// 格式化 天:时:分:秒 参数 - 剩余时间戳 - 单位为 S
export function formateSeconds(endTime) {
  let secondTime = parseInt(endTime) //将传入的秒的值转化为Number
  let min = 0 // 初始化分
  let h = 0 // 初始化小时
  let d = 0 // 初始化天
  let result = ''
  if (secondTime > 60) {
    //如果秒数大于60，将秒数转换成整数
    min = parseInt(secondTime / 60) //获取分钟，除以60取整数，得到整数分钟
    secondTime = parseInt(secondTime % 60) //获取秒数，秒数取佘，得到整数秒数
    if (min > 60) {
      //如果分钟大于60，将分钟转换成小时
      h = parseInt(min / 60) //获取小时，获取分钟除以60，得到整数小时
      min = parseInt(min % 60) //获取小时后取佘的分，获取分钟除以60取佘的分
      if (h > 23) {
        d = parseInt(h / 24) // 获取天，获取分钟除以24，得到整数天
        h = parseInt(h % 24) // 获取天后取佘的小时，获取时除24取佘的时
      }
    }
  }
  result = `${d.toString().padStart(2, '0')}:${h
    .toString()
    .padStart(2, '0')}:${min
    .toString()
    .padStart(2, '0')}:${secondTime.toString().padStart(2, '0')}`
  return result
  // return 00:00:00:00
}

// 时间戳转化为当前时间
function add0(m){return m<10?'0'+m:m }
export function format(time) {
  //shijianchuo是整数，否则要parseInt转换
  var time = new Date(time);
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
}