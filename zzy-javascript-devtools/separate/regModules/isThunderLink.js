export default function isThunderLink(val) {
  return /^thunderx?:\/\/[a-zA-Z\d]+=$/g.test(val);
}