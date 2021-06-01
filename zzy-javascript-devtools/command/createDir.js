const fs = require('fs')


function createDir(targetPath, toPath) {
  try {
    fs.mkdirSync(toPath)
  } catch { }
  getDir(targetPath, toPath)
  function getDir(path, toPath) {
    let childs = fs.readdirSync(path)
    childs = childs.filter(item => {
      return fs.lstatSync(path + '/' + item).isDirectory()
    })
    for (let i = 0; i < childs.length; i++) {
      let toP = toPath + '/' + childs[i]
      try {
        fs.mkdirSync(toP)
      } catch { }
      getDir(path + '/' + childs[i], toP)
    }
  }
}



module.exports = createDir