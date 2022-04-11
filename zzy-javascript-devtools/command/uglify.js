const fs = require('fs');
const path = require('path')
const UglifyJS = require('uglify-js');
const { getFiles } = require('./controlFile')


// 对每个文件进行写入
function writefs(obj) {
  for (let i in obj) {
    fs.writeFileSync(obj[i].path, obj[i].code, 'utf-8')
  }
}

// 拿到所有文件，并重命名、获取文件信息
function setFiles(pathTo) {
  let allFiles = getFiles(pathTo)
  let obj = {}
  allFiles.map((item) => {
    // 拿到文件内容
    let fileContent = fs.readFileSync(item.path, 'utf-8'), fileType = item.fileName.split('.')[1]
    obj[item.fileName] = {
      path: item.path,
      toFileName: item.fileName,
      // 如果是 .js 文件，利用 UglifyJS 进行压缩，混淆，反之不处理
      code: fileType === 'js' ? UglifyJS.minify({ [item.fileName]: fileContent }).code : fileContent
    }
  })
  return obj
}

let Uglify = function (toPath) {
  writefs(setFiles(toPath));
}

Uglify('./lib');