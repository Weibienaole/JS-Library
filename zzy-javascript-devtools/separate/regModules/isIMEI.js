export default function isIMEI(val) {
  return /^\d{15,17}$/g.test(val)
}