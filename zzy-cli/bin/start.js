#! /usr/bin/env node

const program = require('commander')


program
  .version('1.0.0')
  .command('create <name>')
  // -f or --force 为强制创建，如果创建的目录存在则直接覆盖
  .option('-f, --force', '是否强制覆盖')
  .description('创建项目')
  .action((name, options) => {
    // 调用 create.js 并传入值
    require('./create.js')(name, options)
  })

// 解析用户执行命令传入参数
program.parse(process.argv)