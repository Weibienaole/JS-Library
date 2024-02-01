/*
<--README
<n:allEquals>
<d:全等判断>
<d:在两个变量之间进行深度比较以确定它们是否全等。>
```javascript
<p:
@param {any} 对比项A
@param {any} 对比项B
@return boolean
>
// example:
allEquals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }); // true
```
README-->
*/
export default function allEquals(a: any, b: any): boolean {
  if (a === b) return true
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime()
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object'))
    return a === b
  if (a.prototype !== b.prototype) return false
  let keys = Object.keys(a)
  if (keys.length !== Object.keys(b).length) return false
  return keys.every(function (k) {
    return allEquals(a[k], b[k])
  })
}
