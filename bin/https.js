// 远程下载模版
const axios = require('axios')

axios.interceptors.response.use(res => {
  return res.data;
})

/**
 * 获取模板列表
 * @returns Promise
 */
async function getRepoList() {
  return axios.get('https://api.github.com/repos/Weibienaole/zProjects/branches')
}

module.exports = {
  getRepoList
}