export default function isName(name) {
  let ChinaTxtReg = new RegExp('^[\u4e00-\u9fa5]+$')
  return ChinaTxtReg.test(name)
}