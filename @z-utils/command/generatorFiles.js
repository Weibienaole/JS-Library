import fg from 'fast-glob'
import { cwd } from 'process'
import path from 'path'

import { UTILS_DIR_PATH } from '../common/constants.js'
import rollupBuild from './rollupBuild.js'
import { returnIgnore, writeFile } from '../common/utils.js'
import generatorReadme from './generatorReadme.js'

class GenreatorFiles {
  filePaths = []
  relativePaths = []
  mode = undefined

  async init(m) {
    // 1. 根据参数获取对应文件内容
    // 没有值是特殊情况，循环三个全部打包更新
    if (!m) {
      await this.init('base')
      await this.init('react')
      await this.init('vue')
      return
    }
    this.mode = m
    // 每次调用都是最新的
    generatorReadme.recordReadmeMap = new Map()
    this.relativePaths = []

    // 获取content内除去 ignore 排除内容的所有的文件绝对路径，也是工具们
    const files = fg.sync(['**/*.{js,ts,jsx,tsx,vue}'], {
      absolute: true,
      cwd: path.join(cwd(), '/content'),
      ignore: returnIgnore(this.mode)
    })
    this.filePaths = files
    // 2. 遍历文件，批量产出转化后的文件
    await this.buildFiles()

    // 3. 将文件内的注释内容生成至readme.md，并进行组装
    this.writeReadme()

    // 4. 批量记录至入口文件
    this.recordEntry()

  }
  // 批量打包转化后的文件
  async buildFiles() {
    const inputTargets = this.filePaths.map((path) => {
      const [, relativePath] = path.split(UTILS_DIR_PATH + '/')
      this.relativePaths.push(relativePath)
      return [relativePath, `content/${relativePath}`]
    })
    const inputsObj = {}
    for (let [key, val] of inputTargets) {
      inputsObj[key.split('.')[0]] = val
    }
    // 打包
    await rollupBuild(inputsObj, this.mode)
  }
  // 按esm和cjs格式分别写入入口文件
  recordEntry() {
    let esContentData = ''
    let cjsContentData = ''
    this.relativePaths.forEach((path) => {
      const p = path.split('/')
      const [exportName] = p[p.length - 1].split('.')
      const [importName] = path.split('.')

      esContentData += `export { default as ${exportName} } from './${importName}.js';
      
`
      cjsContentData += `
var ${exportName} = require('./${importName}.js');
module.exports = ${exportName};
`
    })
    writeFile(`packages/${this.mode}/es/index.js`, esContentData)
    writeFile(`packages/${this.mode}/cjs/index.js`, cjsContentData)
  }
  writeReadme() {
    generatorReadme.assembly(this.mode)
  }
}

const genreatorFiles = new GenreatorFiles()

export default genreatorFiles
