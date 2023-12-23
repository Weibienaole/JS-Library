/*
<--README
<n:formatFileSize>
<d:B转换到KB,MB,GB并保留两位小数>
```javascript
<p:
@param {number} fileSize
@return string 转换后的值
>
// example: 以 1000 整除模拟，方法内为 1024 标准除
formatFileSize(300421) // 300.421KB
formatFileSize(3004221221) // 3.004GB
```
README-->
*/

// B转换到KB,MB,GB并保留两位小数  参数接受一个 b 字节 为单位的值
const formatFileSize = (fileSize: number): string => {
  let temp
  if (fileSize < 1024) {
    return fileSize + 'B'
  } else if (fileSize < 1024 * 1024) {
    temp = fileSize / 1024
    temp = temp.toFixed(2)
    return temp + 'KB'
  } else if (fileSize < 1024 * 1024 * 1024) {
    temp = fileSize / (1024 * 1024)
    temp = temp.toFixed(2)
    return temp + 'MB'
  } else {
    temp = fileSize / (1024 * 1024 * 1024)
    temp = temp.toFixed(2)
    return temp + 'GB'
  }
}

export default formatFileSize