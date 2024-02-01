import { IGetColonTimeFromDate } from '../../../typings/devtools'

/*
<--README
<n:getColonTimeFromDate>
<d:返回当前24小时制时间的字符串>
```javascript
<p:
@param {Date} 当前Date时间
@return string hh:mm:ss
>
// example:
getColonTimeFromDate3(new Date()) // 18:31:21
```
README-->
*/
// 返回当前24小时制时间的字符串
// getColonTimeFromDate3(new Date());
const getColonTimeFromDate: IGetColonTimeFromDate = (date) => {
  return date.toTimeString().slice(0, 8)
}

export default getColonTimeFromDate
