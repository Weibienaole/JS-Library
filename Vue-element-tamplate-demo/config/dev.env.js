'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
// 本地
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"bendi-testAPI"',
})
