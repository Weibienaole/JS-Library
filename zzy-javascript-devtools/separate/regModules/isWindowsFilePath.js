export default function isWindowsFilePath(val) {
  return /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/g.test(val);
}