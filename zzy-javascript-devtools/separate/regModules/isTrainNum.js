export default function isTrainNum(val) {
  return /^[GCDZTSPKXLY1-9]\d{1,4}$/g.test(val);
}