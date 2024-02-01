import { IChangeTimeYear } from '../../../typings/devtools'

/*
<--README
<n:changeTimeYear>
<d:接受 ms 级的时间戳>
<d:时间格式转化年>
<d:个位自动补零>
```javascript
<p:
@param {string | number} 时间
@return string 时间戳
>
// example:
changeTimeYear(new Date().valueOf()) // -> YYYY-MM-DD
```
README-->
*/

// 时间格式转化年 -- 接受 ms 级的时间戳
const changeTimeYear: IChangeTimeYear = (time) => {
  if (typeof time === 'string') {
    time = parseInt(time) //将传入的时间戳的值转化为Number
  }
  time = new Date(time)
  const year = time.getFullYear()
  const month = time.getMonth() + 1
  const date = time.getDate()
  return (
    year +
    '-' +
    (month >= 10 ? month : '0' + month) +
    '-' +
    (date >= 10 ? date : '0' + date) +
    ' '
  )
}

export default changeTimeYear
