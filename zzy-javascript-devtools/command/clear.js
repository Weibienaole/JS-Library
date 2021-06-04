let fs = require('fs');
let path = require('path')
let getFiles = require('./getFiles')
let [, , clearPath] = process.argv
let files = getFiles(path.resolve(__dirname, clearPath))
files.forEach(e => fs.unlinkSync(e.path))