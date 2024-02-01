
const path = require('path')
const fs = require('fs')

// 删除文件及文件夹
function delFiles(path) {
  const allPaths = getPaths(path)
  allPaths.files.forEach(i => {
    try {
      fs.unlinkSync(i.path)
    } catch (e) { }
  })
  for (let i = allPaths.folder.length - 1; i >= 0; i--) {
    try {
      fs.rmdirSync(allPaths.folder[i].path)
    } catch (e) { }
  }
  function getPaths(path) {
    let data = {
      files: [],
      folder: [
        {
          path: path
        }
      ]
    }
    getAllData(path)
    // 递归拿到所有文件，并重命名、获取文件信息
    function getAllData(path) {
      // 读取当前文件夹
      let nowLevelFiles = fs.readdirSync(path)
      nowLevelFiles.forEach(i => {
        // 判断是否是文件夹
        if (!fs.lstatSync(`${path}/${i}`).isDirectory()) {
          data.files.push({ fileName: i, path: `${path}/${i}`, parentPath: path })
        } else {
          data.folder.push({
            path: `${path}/${i}`
          })
          getAllData(`${path}/${i}`, {})
        }
      })
    }
    return data
  }
}


// 复制文件夹
// 源路径  目标路径  目标文件夹(必须是源路径下一级的文件夹)
function copyFiles(formPath, toPath, targetDir) {
  // 排除项
  const noSelect = []

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
      if (!isDir && !noSelect.some(it => path.extname(item) === it)) fs.copyFileSync(formPath + '/' + item, toPath + '/' + item);
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

// 获取文件路径
function getFiles(path) {
  let files = []
  getAllFiles(path)
  // 递归拿到所有文件，并重命名、获取文件信息
  function getAllFiles(path) {
    // 读取当前文件夹
    let nowLevelFiles = fs.readdirSync(path)
    nowLevelFiles.forEach(i => {
      // 判断是否是文件夹
      if (!fs.lstatSync(`${path}/${i}`).isDirectory()) {
        files.push({ fileName: i, path: `${path}/${i}`, parentPath: path })
      } else getAllFiles(`${path}/${i}`, {})
    })
  }
  return files
}

module.exports = { delFiles, copyFiles, getFiles }