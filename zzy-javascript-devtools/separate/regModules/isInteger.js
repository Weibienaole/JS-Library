export default function isInteger(val) {
  let reg = /^[-+]?\d*$/
  return reg.test(val)
}