export default function getColonTimeFromDate(date) {
  return date.toTimeString().slice(0, 8);
}