export default function isVersion(val) {
  return /^\d+(?:\.\d+){2}$/g.test(val);
}