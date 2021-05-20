let fs = require('fs');
let path = require('path')
let getFiles = require('./getFiles')

// let files = getFiles(path.resolve(__dirname, '../lib'))
let files = getFiles(path.resolve(__dirname, '../lib_t'))
files.forEach(e => fs.unlinkSync(e.path))