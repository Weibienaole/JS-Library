export default function isColor16(val) {
  return /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(val);
}