
const RegModules = require('./lib/regModule.min')
const DevTools = require('./lib/devTools.min')
const ReactComponents = require('./lib/reactComponents/index.min')

// import RegModules from './src/regModule'
// import DevTools from './src/devToos'
// import ReactComponents from './src/reactComponents/index.jsx'
// import asd from './DL/test/asd'
// import fn2 from './DL/test/fn2'

// html引入 import 方式替换require处理
// import DevTools from './src/devTools'
// ...

let devtools = new DevTools()
let regModules = new RegModules()

// html引入
// export default { devtools }
// export { devtools, regModules, getName }
// export default 

// export { asd, fn2 }
export {devtools, regModules, ReactComponents}

