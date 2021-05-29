export default function deleteHTMLTags(str) {
  return str.replace(/<[^>]*>/g, '')
}