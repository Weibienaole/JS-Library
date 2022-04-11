const fs = require('fs')
const path = require('path')
const { exec, execSync } = require('child_process');
const { delFiles } = require('./controlFile')

const TSConfig = require('../tsconfig.json')

// 第一步将ReactComponents以外的文件以默认格式转译
TSConfig.compilerOptions.module = 'none'
TSConfig.include.splice(0, 1, 'src')
TSConfig.exclude.push('src/ReactComponents/**')

fs.writeFileSync(path.resolve(__dirname, '../tsconfig.json'), JSON.stringify(TSConfig), 'utf-8')

// tsx编译
exec('tsc', () => {
  console.log('tsc Success!');
  nextTsc()
})

// 第二步 依旧tsc，只不过只转译 ReactComponents 文件夹内的文件，将格式改为 ES格式，用于下一步导出(因为react组件不参与分离，所以在这一步就得和其他方法在同一起跑线。详情看parsing.js逻辑)
const nextTsc = () => {
  TSConfig.compilerOptions.module = 'ESNEXT'
  TSConfig.include.splice(0, 1, 'src/ReactComponents')
  TSConfig.exclude.pop()
  fs.writeFileSync(path.resolve(__dirname, '../tsconfig.json'), JSON.stringify(TSConfig), 'utf-8')

  exec('tsc', () => {
    console.log('next tsc Success');
    nextStep()
  })
}

// 接下来就按步骤走就好了
const nextStep = () => {
  // 清空lib
  delFiles(path.resolve(__dirname, '../lib'))
  // 分离
  execSync('node ./command/parsingJs.js')
  console.log('parsing Success!');
  // 转译
  execSync('./node_modules/.bin/babel separate --copy-files -d lib')
  console.log('babel Success!');
  // 压缩
  execSync('node ./command/uglify.js')
  console.log('mifiles Success!');
  // 删除之前遗留的无用文件夹

  delFiles(path.resolve(__dirname, '../build'))
  delFiles(path.resolve(__dirname, '../separate'))

  console.log('delete Success!');
}