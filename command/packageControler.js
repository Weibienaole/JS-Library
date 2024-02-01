import { readFile, writeFile } from '../common/utils.js'
import generatorReadme from './generatorReadme.js'
import shell from 'shelljs'
import inquirer from 'inquirer'
import { chdir } from 'process'

export const updateVersion = (mode) => {
  // 获取到最新的日志内容
  const getLatsUpdate = generatorReadme.updates[0]
  if (getLatsUpdate?.version) {
    // 更改当前mode下的package.json版本号
    if (typeof getLatsUpdate?.version !== 'string') {
      for (let mode in getLatsUpdate?.version) {
        if (getLatsUpdate?.version[mode] !== '-1') {
          const p = `/packages/${mode}/package.json`
          writeVersion(p, getLatsUpdate.version[mode])
        }
      }
    } else {
      const p = `/packages/${mode}/package.json`
      writeVersion(p, getLatsUpdate.version)
    }
  }
}

const writeVersion = (path, version) => {
  const fileContent = JSON.parse(readFile(path) || '{}')
  fileContent.version = version
  writeFile(path, JSON.stringify(fileContent))
}

// 发布待定...
export const publishPackage = async (mode) => {
  if (!mode) {
    await publish('base')
    await publish('react')
    await publish('vue')
  } else {
    publish(mode)
  }
}

const publish = async (mode) => {
  const { confirm } = await inquirer.prompt([
    {
      type: 'list',
      name: 'confirm',
      message: `确认发布吗(${mode})？`,
      choices: ['确认', '取消'],
      default: 0
    }
  ])
  if (confirm === '确认') {
    try {
      chdir(`./packages/${mode}`)
      await shell.exec(`npm publish`)
      console.log(cwd());
      console.log('发布成功！')

      await shell.exec(`pnpm -r --filter './packages/${mode}' p`)
    } catch {
      console.log('如果报错，则手动进行npm登陆后重试！')
    }
  }
}
