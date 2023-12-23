/*
<--README
<n:deepClone>
<d:深拷贝>
```javascript
<p:
@param {T} 拷贝内容
@return T
>
// example:
const o = {
  a: [
    {
      b: 1
    }
  ]
}
const cloneO = deepClone(o)
```
README-->
*/
// 深拷贝
function deepClone<T>(target: T): T {
  let result: any
  if (typeof target === 'object') {
    if (Array.isArray(target)) {
      result = []
      for (let i in target) {
        result.push(deepClone(target[i]))
      }
    } else if (target === null) {
      result = null
    } else if (target.constructor === RegExp) {
      result = target
    } else {
      result = {}
      for (let i in target) {
        result[i] = deepClone(target[i])
      }
    }
  } else {
    result = target
  }
  return result
}
export default deepClone
