import fs from 'fs-extra'
import { cwd } from 'process'
import shell from 'shelljs'

import { OIRGIN_DIR } from './constants.js'
import path, { join } from 'path'

export const getFilesPath = (target, absolute = true) => {
  return fg.sync([`**/*.{${target || 'js,ts,jsx,tsx,vue'}}`], {
    absolute,
    cwd: path.join(cwd(), `${OIRGIN_DIR}`)
    // ignore: ['**/typings']
  })
}
export const baseOutputOptions = [
  {
    format: 'es',
    dir: 'packages/base/es'
  },
  {
    format: 'cjs',
    dir: 'packages/base/cjs'
  }
]

export const recatOutputOptions = [
  {
    format: 'es',
    dir: 'packages/react/es'
  },
  {
    format: 'cjs',
    dir: 'packages/react/cjs'
  }
]

export const vueOutputOptions = [
  {
    format: 'es',
    dir: 'packages/vue/es'
  },
  {
    format: 'cjs',
    dir: 'packages/vue/cjs'
  }
]

// 获取对应mode下的output path
export const returnTargetOptions = (mode) => {
  return [
    {
      format: 'es',
      dir: `packages/${mode}/es`
    },
    {
      format: 'cjs',
      dir: `packages/${mode}/cjs`
    }
  ]
}

export const returnDelDir = (mode) => {
  if (mode) {
    return [`packages/${mode}/cjs/**`, `packages/${mode}/es/**`]
  } else {
    return [
      'packages/base/cjs/**',
      'packages/base/es/**',
      'packages/react/cjs/**',
      'packages/react/es/**',
      'packages/vue/cjs/**',
      'packages/vue/es/**'
    ]
  }
}

export const returnIgnore = (mode) => {
  if (mode === 'base') {
    return ['**/vue/**', '**/react/**']
  } else {
    return [mode === 'react' ? '**/vue/**' : '**/react/**']
  }
}

// 时间戳转化为当前时间
export const formatNowTime = () => {
  function add0(m) {
    return m < 10 ? '0' + m : m
  }
  const newtime = new Date()
  var y = newtime.getFullYear()
  var m = newtime.getMonth() + 1
  var d = newtime.getDate()
  var h = newtime.getHours()
  var mm = newtime.getMinutes()
  var s = newtime.getSeconds()
  return (
    y +
    '-' +
    add0(m) +
    '-' +
    add0(d) +
    ' ' +
    add0(h) +
    ':' +
    add0(mm) +
    ':' +
    add0(s)
  )
}
export const writeFile = (filePath, content) => {
  fs.writeFileSync(path.join(cwd(), filePath), content, 'utf-8')
}
export const readFile = (filePath) => {
  try {
    const content = fs.readFileSync(join(cwd(), filePath), 'utf-8')
    return content
  } catch (e) {
    return ''
  }
}
