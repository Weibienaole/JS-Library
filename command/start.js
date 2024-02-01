import inquirer from 'inquirer'

import generatorReadme from './generatorReadme.js'
import genreatorFiles from './generatorFiles.js'
import { publishPackage, updateVersion } from './packageControler.js'
;(async function start() {
  const mode = process.argv.splice(2)[0]
  const { type } = await inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: '操作类型：',
      choices: ['更新', '打包', '取消上次更新'],
      default: 1
    }
  ])
  if (type === '更新') {
    const { level } = await inquirer.prompt([
      {
        type: 'list',
        name: 'level',
        message: '版本更新类型',
        choices: ['major', 'minor', 'patch'],
        default: 2
      }
    ])

    const { say } = await inquirer.prompt([
      {
        type: 'input',
        name: 'say',
        message: '更新描述：',
        default: '修复若干bug..'
      }
    ])
    // 添加本次更新信息，用于readme日志
    generatorReadme.addUpdateSays(say, level, mode)
    // 初始化，1-4步骤
    await genreatorFiles.init(mode)
    // 5. 更新package.json版本号
    updateVersion(mode)

    // 6. 上传至npm---下版更新
    // publishPackage(mode)
  } else if (type === '打包') {
    genreatorFiles.init(mode)
  } else if (type === '取消上次更新') {
    generatorReadme.delLastUpdateSays(mode)
  }
})()
