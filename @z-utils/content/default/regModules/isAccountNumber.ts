/*
<--README
<n:isAccountNumber>
<d:验证银行卡号>
<d:10到30位, 覆盖对公/私账户, 参考微信支付>
```javascript
<p:
@param {string} account
@return boolean
>
```
README-->
*/
const isAccountNumber = (val: string): boolean => {
  return /^[1-9]\d{9,29}$/g.test(val)
}
export default isAccountNumber