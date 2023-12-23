/*
<--README
<n:isTrainNum>
<d:验证火车车次>
```javascript
<p:
@param {string} value
@return boolean
>
```
README-->
*/
// 验证火车车次
const isTrainNum = (val: string): boolean => {
  return /^[GCDZTSPKXLY1-9]\d{1,4}$/g.test(val)
}

export default isTrainNum
