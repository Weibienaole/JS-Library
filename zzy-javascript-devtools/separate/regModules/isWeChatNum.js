export default function isWeChatNum(val) {
  return /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(val);
}