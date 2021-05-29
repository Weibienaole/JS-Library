export default function isWindowsFolderPath(val) {
  return /^[a-zA-Z]:\\(?:\w+\\?)*$/g.test(val);
}