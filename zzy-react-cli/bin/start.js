#! /usr/bin/env node

const program = require('commander')


program
  .version('1.0.0')
  .command('create <name>')
  .description('创建项目')
  .action((name, options) => {
    // 打印命令行输入的值
    require('./create.js')(name, options)
  })

// 解析用户执行命令传入参数
program.parse(process.argv)