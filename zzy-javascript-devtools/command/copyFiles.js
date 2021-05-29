const fs = require('fs')
const path = require('path')

// 源路径  目标路径  目标文件夹(必须是源路径下一级的文件夹)
function copyFiles(formPath, toPath, targetDir) {

  let allFiles = fs.readdirSync(formPath)
  // 判断源路径有无目标文件夹
  if (allFiles.indexOf(targetDir) === -1) return

  try {
    fs.mkdirSync(`${toPath}/${targetDir}`)
  } catch { }

  getDir(`${formPath}/${targetDir}`, `${toPath}/${targetDir}`)
  function getDir(formPath, toPath) {
    let childs = fs.readdirSync(formPath)
    let childsDir = childs.filter(item => {
      isDir = fs.lstatSync(formPath + '/' + item).isDirectory()
      // 不是文件夹且后缀不为 .less .css
      if (!isDir && path.extname(item) !== '.less' && path.extname(item) !== '.css') fs.copyFileSync(formPath + '/' + item, toPath + '/' + item);
      return isDir
    })
    for (let i = 0; i < childsDir.length; i++) {
      let toP = toPath + '/' + childsDir[i]
      try {
        fs.mkdirSync(toP)
      } catch { }
      getDir(formPath + '/' + childsDir[i], toPath + '/' + childsDir[i])
    }
  }
}



module.exports = copyFiles
