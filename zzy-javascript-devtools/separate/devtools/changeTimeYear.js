export default function changeTimeYear(time) {
  time = parseInt(time) //将传入的时间戳的值转化为Number
  time = new Date(time);
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