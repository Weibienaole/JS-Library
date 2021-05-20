const fs = require('fs');
const path = require('path')
const UglifyJS = require('uglify-js');
const getFiles = require('./getFiles')
const noCompress = ['.less'] // 不需要压缩的文件名称

/*
  导入主文件
  获取所有导出值
  利用fs遍历生成新文件
  新建一个外部index，将所有遍历生成的文件引入其中   动态模版生成？
*/
class DemandLoading {
  constructor(path) {
    this.path = path
    this.indexJs = ''
    this.init()
  }
  init() {
    const files = getFiles(this.path)
    // 拿到当前文件夹下的所有文件
    for (let file of files) {
      // 获取文件内的所有导出
      let fileExportFn = require(file.path)
      let dirName = file.fileName.split('.')[0]
      // 写入文件夹
      try {
        fs.mkdirSync(path.resolve(__dirname, `../DL/${dirName}`))
      } catch {}
      // 遍历生成新文件
      this.mkFile(fileExportFn, dirName)
    }
  }
  // 遍历生成新文件
  mkFile(fileExportFn, dirName) {
    for (let i in fileExportFn) {
      let exportFn = fileExportFn[i]
      let filePath = path.resolve(__dirname, `../DL/${dirName}/`) + '/' + i + '.js'
      fs.writeFileSync(filePath, 'module.exports=' + exportFn, 'utf-8')
    }
  }
}

// .css 文件手动压缩
function iGetInnerText(testStr) {
  var resultStr = testStr.replace(/\ +/g, ""); //去掉空格
  resultStr = testStr.replace(/[ ]/g, "");    //去掉空格
  resultStr = testStr.replace(/[\r\n]/g, ""); //去掉回车换行
  return resultStr;
}

// 对每个文件进行写入
function writefs(obj) {
  for (let i in obj) {
    fs.writeFile(obj[i].newPath, obj[i].code, 'utf-8', function (err) {
      if (err) throw err;
      if (i.indexOf('.js') > 0 || i.indexOf('.less') > 0) {
        // 写入完成删除源文件
        fs.unlinkSync(obj[i].form)
      }
    })
  }
}

// 拿到所有文件，并重命名、获取文件信息
function setFiles(pathTo) {
  let allFiles = getFiles(pathTo)
  let obj = {}
  allFiles.map((item, index) => {
    // 排除
    if (noCompress.indexOf(item.fileName) !== -1) return
    let newI = item.fileName.replace('.js', '.min.js')
    // 拿到文件内容
    let fileContent = fs.readFileSync(item.path, 'utf-8'), fileType = item.fileName.split('.')[1]
    obj[item.fileName] = {
      form: item.path,
      toFileName: newI,
      newPath: `${item.parentPath}/${newI}`,
      // 如果是 .js 文件，利用 UglifyJS 进行压缩，混淆，如果不是则利用正则消除空格
      code: fileType === 'js' ? UglifyJS.minify({ [item.fileName]: fileContent }).code : iGetInnerText(fileContent),
    }
  })
  return obj
}

let Uglify = function (toPath) {
  // new DemandLoading(path.resolve(__dirname, '../lib_t'))
  writefs(setFiles(toPath));
}

Uglify('./lib');
// Uglify('./lib_t');