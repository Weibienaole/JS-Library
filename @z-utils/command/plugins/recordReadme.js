import generatorReadme from '../generatorReadme.js'

export default function recordReadme() {
  return {
    name: 'selfPlugin:recordReadme',
    transform(code, id) {
      try {
        // 获取截取后的内容
        const item = returnReplacedContents(code)
        if (item?.length > 0) {
          // 获取到当前模块的对应父名称
          const paths = id.split('/')
          const targetLevel = paths[paths.length - 2]
          const targetLevelContents = generatorReadme.contentGet(targetLevel, [])
          // 写入
          targetLevelContents.push(item)
          generatorReadme.contentSet(targetLevel, targetLevelContents)
        }
      } catch (e) {
        console.log(e)
      }
      return { code, map: null }
    }
  }
}

const returnReplacedContents = (str) => {
  // 获取开始和结束的定制标签； <--README ,  README-->
  // 具体显示行为在 根目录/example.ts 中查看
  let matchArs = str.match(/<\-\-README([\s\S]*?)README\-\->/g)
  if (!matchArs) return []
  // name： <n:FnName> 只有一个
  let nameMatchReg = /<n\:([\s\S]*?)>/g
  // desc <d:FnDesc> 可包含多个
  let descMatchReg = /<d\:([\s\S]*?)>/g
  // params： <p:FnParams> 只有一个区间
  let paramsMatchReg = /<p\:([\s\S]*?)>/g
  matchArs = matchArs.map((str) => {
    let noStartEndStr = replaceTargetStr(str, '<--README\n', '', 'README-->')
    // 名称
    let matchName = noStartEndStr.match(nameMatchReg)
    if (matchName && matchName.length > 0) {
      matchName = matchName[0]
      // <n:FnName> -> #### FnName
      matchName = replaceTargetStr(matchName, '<n:', '#### ', '>')
      noStartEndStr = noStartEndStr.replace(nameMatchReg, matchName)
    }
    // 描述 多个
    let matchDescAtrs = noStartEndStr.match(descMatchReg)
    if (matchDescAtrs && matchDescAtrs.length > 0) {
      // <d:FnName> -> - FnName
      matchDescAtrs.map((desc) => {
        const c = replaceTargetStr(desc, '<d:', '- ', '>')
        noStartEndStr = noStartEndStr.replace(desc, c)
      })
    }
    // 可选参数
    let matchParams = noStartEndStr.match(paramsMatchReg)
    // <p:FnParams> -> - /* FnParams */
    if (matchParams && matchParams.length > 0) {
      matchParams = matchParams[0]
      matchParams = replaceTargetStr(matchParams, '<p:', '/**', '>', '*/')
      noStartEndStr = noStartEndStr.replace(paramsMatchReg, matchParams)
    }
    return noStartEndStr
  })
  return matchArs
}

const replaceTargetStr = (str, start, repStart, end, repEnd = '') => {
  return str.replace(start, repStart).replace(end, repEnd)
}
