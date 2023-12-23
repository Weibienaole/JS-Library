import { REALTIVE_UPDATES_RECORD_PATH } from '../common/constants.js'
import { formatNowTime, readFile, writeFile } from '../common/utils.js'
import { updateVersion } from './packageControler.js'

class GenreatorReadme {
  /*
    由rollup打包时，自定义插件(recordReadme)在transform钩子中检索指定注释格式，获取到相应转换后到内容存储到recordReadmeMap中
    mock:
    devtools: [fna,fnb...]
      fna:[注释组a,注释组b]
    ...hooks,regModules等模块
  */
  recordReadmeMap = new Map()
  updates = ''
  // 注释内容生成readme
  generatorContent() {
    let readmeStr = ''
    for (let [key, items] of this.recordReadmeMap) {
      // devtools,regModules,hooks等标题设置
      readmeStr += `### ${key}\n`
      items.forEach((item) => {
        item.forEach((con) => {
          readmeStr += con
        })
      })
    }
    return readmeStr
  }
  contentGet(key, def) {
    return this.recordReadmeMap.get(key) || def
  }
  contentSet(key, val) {
    return this.recordReadmeMap.set(key, val)
  }
  // 添加更新日志, mode如果没有，那么
  addUpdateSays(say, level, mode) {
    // 读取文件
    let updates
    let fileContent = readFile(REALTIVE_UPDATES_RECORD_PATH) || '{}'
    fileContent =  JSON.parse(fileContent)
    updates = fileContent?.list || []
    // 生成k/v
    const now = formatNowTime()
    updates.unshift({
      id: new Date().valueOf(),
      time: now.split(' ')[0],
      say,
      version: this.getVersion(level, mode)
    })
    this.updates = updates
    writeFile(REALTIVE_UPDATES_RECORD_PATH, JSON.stringify({ list: updates }))
  }
  // 获取修改后的版本号
  getVersion(level, mode) {
    let targets = ['base', 'react', 'vue']
    if (mode) {
      return this.getFileVersion(level, mode)
    } else {
      let vo = {}
      targets.map((md) => {
        vo[md] = this.getFileVersion(level, md)
      })
      return vo
    }
  }
  getFileVersion(level, md) {
    const file = readFile(`/packages/${md}/package.json`) || '{}'
    let version = JSON.parse(file)?.version || '-1'
    if (version !== '-1') {
      let [major, minor, patch] = version.split('.')
      if (level === 'major') {
        major = +major + 1
        minor = 0
        patch = 0
      } else if (level === 'minor') {
        minor = +minor + 1
        patch = 0
      } else if (level === 'patch') {
        patch = +patch + 1
      }
      version = [major, minor, patch].join('.')
    }
    return version
  }
  // 删除上次打包日志（updates.json）
  delLastUpdateSays(mode) {
    let updates
    const fileContent = readFile(REALTIVE_UPDATES_RECORD_PATH) || '{}'
    updates = JSON.parse(fileContent).list || []
    updates.shift()
    this.updates = updates
    writeFile(REALTIVE_UPDATES_RECORD_PATH, JSON.stringify({ list: updates }))
    updateVersion(mode)
  }
  // 组装 header+log+content
  // header写死，log根据更新日志进行组装，content组装好了已经
  assembly(mode) {
    const contents = this.generatorContent()
    let title = `
# 渣渣宇的开发工具包@${mode}
    `
    let updateContent = JSON.parse(readFile(REALTIVE_UPDATES_RECORD_PATH))?.list || []
    updateContent = updateContent.slice(0, 10)
    // 改造日志内容
    updateContent = updateContent.map(({time, say, version}) => {
      let s = ''
      const v = typeof version === 'string' ? version : version[mode]
      let says = say.split(',')
      says = says.map(it => `  - ${it}`).join('\n')
      s = `- ${time} version：${v}\n${says}`
      return s
    })

    let header = readFile('/readmes/header.md')
    header = header.replaceAll('__ZUTILSREPLACE', `@utils/${mode}`)

    const content = `${title}
${header}
## 更新日志
${updateContent.join('\n')}
## 包简述
${contents}
    `
    // 写入
    writeFile(`/packages/${mode}/readme.md`, content)
  }
}

const generatorReadme = new GenreatorReadme()

export default generatorReadme
