// 使用jquery的 $.ajax 实现 请求

function request(url, data={}) { // url: 传递完整的url -> 包括token
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'post',
      url,
      data: JSON.stringify(data),
      contentType: 'application/json;, text/javascript, */*; q=0.01',
      success: function (result) {
        resolve(result)
      },
      error: function (err) {
        reject(err)
      },
    })
  })
}
