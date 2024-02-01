/*
<--README
<n:rewirteLog>
<d:不显示 console.log>
<d:重写log为空函数>
README-->
*/
// 不显示 console.log
const rewirteLog = (): void => {
  console.log = function () {}
}
export default rewirteLog