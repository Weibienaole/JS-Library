
// const RegModules = require('./lib/regModule.min')
// const DevTools = require('./lib/devTools.min')
// const ReactComponents = require('./lib/reactComponents/index.min')

import RegModules from './src/regModule'
// import DevTools from './src/devToos'
// import ReactComponents from './src/reactComponents/index.jsx'
import asd from './lib_t/test'

// html引入 import 方式替换require处理
// import DevTools from './src/devTools'
// ...

// let devtools = new DevTools()
// let regModules = new RegModules()

// html引入
// export default { devtools }
// export { devtools, regModules, getName }
// export default 

export { asd, RegModules }


// react 通过babel单独转译,转译之后引入index.js 整体导出