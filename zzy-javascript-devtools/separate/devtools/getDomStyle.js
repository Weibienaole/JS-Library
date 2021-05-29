export default function getDomStyle(el, ruleName) {
  return getComputedStyle(el)[ruleName];
}