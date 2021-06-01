const fs = require('fs');
const path = require('path')
const getFiles = require('./getFiles')
const copyFiles = require('./copyFiles')

/*
  导入主文件
  获取所有导出值
  利用fs遍历生成新文件
  新建一个外部index，将所有遍历生成的文件引入其中 动态模版生成
*/

// index.js 到目标 文件的路径

class Parsing {
  // originPath - 源路径    targetPath - 目标路径   mainPath - 入口文件路径
  constructor(originPath, targetPath, mainPath) {
    this.path = originPath
    this.fileDetail = {} // 文件路径数据存储
    this.storePath = './lib/' // 最终文件存储路径
    this.resolvePath = targetPath
    this.indexPath = mainPath
  }
  init() {
    try {
      fs.mkdirSync(this.resolvePath)
    } catch { }
    // react component 拷贝一份到目标文件夹，不参与分割
    copyFiles(this.path, this.resolvePath, 'ReactComponents')

    // 拿到所有目标目录及自文件路径集合
    let files = getFiles(this.path)
    // 排除 不是 .js 后缀形式文件    排除 react component  另外处理
    files = files.filter(item => {
      let parentN = item.parentPath.split('/')
      return path.extname(item.fileName) === '.js' && parentN[parentN.length - 1] !== 'ReactComponents'
    })
    // 拿到当前文件夹下的所有文件  目前仅一层，若优化使用递归
    for (let file of files) {
      // 获取文件内的所有导出
      let fileExportFnList = require(file.path)
      let dirName = file.fileName.split('.')[0]
      // 写入文件夹
      try {
        fs.mkdirSync(`${this.resolvePath}/${dirName}`)
      } catch { }
      // 遍历生成新文件
      this.mkFile(fileExportFnList, dirName)
    }
    this.createIndex()
  }
  // 遍历生成新文件
  mkFile(fileExportFnList, dirName) {
    let dirDatas = []
    for (let i in fileExportFnList) {
      let exportFn = fileExportFnList[i]
      dirDatas.push({
        path: `${this.storePath}${dirName}/${i}.js`,
        name: i
      })
      let filePath = `${this.resolvePath}/${dirName}/${i}.js`
      fs.writeFileSync(filePath, 'export default ' + exportFn, 'utf-8')
    }
    // 记录每一个文件内所有导出模块(新文件)的路径及模块名称
    this.fileDetail[dirName] = dirDatas
  }
  //自动生成index.js
  createIndex() {
    let contentData = ''
    let exportCon = ''
    let fileD = this.fileDetail
    let RCFiles = getFiles(`${this.resolvePath}/ReactComponents`)
    // 筛选出后缀仅为 .jsx 的文件 且对后缀进行替换并将格式与 fileDetail 同步
    RCFiles = RCFiles.filter(i => path.extname(i.fileName) === '.jsx').map(j => {
      return {
        path: `${this.storePath}${j.path.split('separate')[1].replace('.jsx', '.js')}`,
        name: j.fileName.split('.jsx')[0]
      }
    })
    fileD = { ...fileD, 'ReactComponents': RCFiles }
    let dirNames = ''
    // 合并统一处理入口文件的导入
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
      // 版本向下兼容，将一个文件中的所有模块包裹一起，键名为文件名称
      contentData +=
        `
let ${dir} = { ${names.slice(0, names.length - 2)} }

`
      exportCon += names
    }
    // 删除额外 ,  号
    exportCon = exportCon.slice(0, exportCon.length - 2)
    dirNames = dirNames.slice(0, dirNames.length - 2)
    let finallyData =
      `
${contentData}

export { ${exportCon}, ${dirNames} }

`
    // 合并后写入
    fs.writeFileSync(this.indexPath, finallyData, 'utf-8')


  }
}

const parsing = new Parsing(
  path.resolve(__dirname, '../src'),
  path.resolve(__dirname, '../separate'),
  path.resolve(__dirname, '../index.js')
)

parsing.init()