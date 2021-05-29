const fs = require('fs');
const path = require('path')
const UglifyJS = require('uglify-js');
const getFiles = require('./getFiles')
const copyFiles = require('./copyFiles')
const noCompress = ['.less'] // 不需要压缩的文件名称

/*
  导入主文件
  获取所有导出值
  利用fs遍历生成新文件
  新建一个外部index，将所有遍历生成的文件引入其中   动态模版生成？
*/

// index.js 到目标 文件的路径

class Parsing {
  constructor(p) {
    this.path = p
    this.indexJs = ''
    this.fileDetail = {}
    this.targetPath = './lib/'
    // this.babelPath = './'
    this.resolvePath = path.resolve(__dirname, '../separate')
    this.indexPath = path.resolve(__dirname, '../index.js')
    this.init()
  }
  init() {
    try {
      fs.mkdirSync(this.resolvePath)
    } catch { }
    // react component 拷贝一份到目标文件夹，不参与分割
    copyFiles(this.path, this.resolvePath, 'ReactComponents')
    let files = getFiles(this.path)
    // 排除 react component  另外处理
    files = files.filter(item => {
      let parentN = item.parentPath.split('/')
      return path.extname(item.fileName) === '.js' && parentN[parentN.length - 1] !== 'ReactComponents'
    })
    // 拿到当前文件夹下的所有文件
    for (let file of files) {
      // 获取文件内的所有导出
      let fileExportFn = require(file.path)
      let dirName = file.fileName.split('.')[0]
      // 写入文件夹
      try {
        fs.mkdirSync(`${this.resolvePath}/${dirName}`)
      } catch { }
      // 遍历生成新文件
      this.mkFile(fileExportFn, dirName)
    }
    this.createIndex()
  }
  // 遍历生成新文件
  mkFile(fileExportFn, dirName) {
    let dirDatas = []
    for (let i in fileExportFn) {
      let exportFn = fileExportFn[i]
      dirDatas.push({
        path: `${this.targetPath}${dirName}/${i}.js`,
        name: i
      })
      let filePath = `${this.resolvePath}/${dirName}/${i}.js`
      fs.writeFileSync(filePath, 'export default ' + exportFn, 'utf-8')
    }
    this.fileDetail[dirName] = dirDatas
  }
  //自动生成index.js
  createIndex() {
    let contentData = ''
    let exportCon = ''
    let fileD = this.fileDetail
    let RCFiles = getFiles(`${this.resolvePath}/ReactComponents`)
    RCFiles = RCFiles.filter(i => path.extname(i.fileName) === '.jsx').map(j =>{
      return {
        path: `${this.targetPath}${j.path.split('separate')[1].replace('.jsx', '.js')}`,
        name: j.fileName.split('.jsx')[0]
      }
    })
    fileD = { ...fileD, 'ReactComponents': RCFiles }
    let dirNames = ''
    for (let dir in fileD) {
      let names = ''
      dirNames += dir + ', '
      let files = fileD[dir]
      for (let i = 0; i < files.length; i++) {
        let { name, path } = files[i]
        names += name + ', '
        contentData +=
          `
import ${name} from '${path}'

`
      }
      // names = names.slice(0, names.length - 2)
      contentData +=
        `
let ${dir} = { ${names.slice(0, names.length - 2)} }

`
      exportCon += names
    }
    exportCon = exportCon.slice(0, exportCon.length - 2)
    dirNames = dirNames.slice(0, dirNames.length - 2)
    let finallyData =
      `
${contentData}

export { ${exportCon}, ${dirNames} }

`
    fs.writeFileSync(this.indexPath, finallyData, 'utf-8')


  }
}

new Parsing(path.resolve(__dirname, '../src'))