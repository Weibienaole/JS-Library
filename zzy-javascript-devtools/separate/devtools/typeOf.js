export default function typeOf(data) {
  let res = Object.prototype.toString.call(data).split(' ')[1]
  return res.slice(0, res.length - 1)
}