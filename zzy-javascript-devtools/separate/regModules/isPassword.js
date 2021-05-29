export default function isPassword(val) {
  let reg = /^[a-zA-Z0-9_]+$/;
  return reg.test(val) && val.length > 5 && val.length < 21
}