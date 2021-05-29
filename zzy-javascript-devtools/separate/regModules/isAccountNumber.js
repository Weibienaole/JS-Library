export default function isAccountNumber(val) {
  return /^[1-9]\d{9,29}$/g.test(val)
}