const ora = require('ora')
const { getRepoList } = require('./https')
const inquirer = require('inquirer')
const downloadGitRepo = require('download-git-repo')
const util = require('util')
const path = require('path')

let timer

class Generator {
  constructor(name, targetDir) {
    // 文件夹名称
    this.name = name

    // 位置
    this.targetDir = targetDir

    // 对download-git-repo 进行promise话改造
    this.downloadGitRepo = util.promisify(downloadGitRepo);
  }
  async create() {
    // 1）获取模板名称
    const repo = await this.getRepo()

    await this.download(repo)
    console.log('模版下载成功！');
    clearTimeout(timer)
  }
  /*
  获取用户选择的模版
    1.远程拉取模版数据
    2.用户选择所要下载的模版名称
    3.return用户选择的名称
  */

  async getRepo() {
    const repoList = await wrapLoading(getRepoList, '获取目标模版中...')
    if (!repoList) return

    // 筛选指定项目，过滤只要名称
    const repos = repoList.filter(item => item.name.indexOf('zzy-project') !== -1)

    // 2）用户选择需要下载的模板名称
    const { repo } = await inquirer.prompt({
      name: 'repo',
      type: 'list',
      choices: repos.map(item => item.description),
      message: '请选择一个模版进行创建'
    })

    // 3. return用户选择
    const selectRepos = repos.filter(item => item.description === repo)[0]
    return { name: selectRepos.name, branch: selectRepos.default_branch }
  }

  // 远程下载模版
  async download({ name, branch }) {
    // 拼接链接
    const requestUrl = `direct:https://github.com/Weibienaole/${name}/archive/refs/heads/${branch}.zip`

    // 2min 之后弹出，显示超时
    timer = setTimeout(() => {
      clearTimeout(timer)
      throw ('模版下载超时，请重试！')
    }, 1000 * 60 * 2);
    // 调用下载方法，进行远程下载
    await wrapLoading(
      this.downloadGitRepo,
      '正在下载目标模版中...',
      requestUrl,
      path.resolve(process.cwd(), this.targetDir)
    )
  }
}

// 添加加载动画
async function wrapLoading(fn, message, ...args) {
  // ora初始化，传入提示 message
  const spinner = ora(message)
  // 开始
  spinner.start()
  try {
    // 执行fn
    const result = await fn(...args)
    // 成功
    spinner.succeed()
    return result
  } catch {
    // 失败
    spinner.fail('请求失败，请重试...')
    return null
  }
}

module.exports = Generator
