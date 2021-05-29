export default function generateTree(items, parentId = null, selectVal = 'parentId') {
  return items.filter(item => item[selectVal] === parentId).map(i => { return { ...i, children: generateTree(items, i.id, selectVal) } })
}