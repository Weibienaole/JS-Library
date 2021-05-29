export default function isEnglish(val) {
  let reg = /^[a-zA-Z]+$/
  return reg.test(val)
}