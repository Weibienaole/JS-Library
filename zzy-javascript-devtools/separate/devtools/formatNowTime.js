export default function formatNowTime(time) {
  function add0(m) { return m < 10 ? '0' + m : m }
  time = parseInt(time) //将传入的时间戳的值转化为Number
  time = new Date(time);
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
}