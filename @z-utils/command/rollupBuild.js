import { rollup } from 'rollup'
import typescript from 'rollup-plugin-typescript2'
import cjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import del from 'rollup-plugin-delete'
import { DEFAULT_EXTENSIONS } from '@babel/core'

import { returnDelDir, returnTargetOptions } from '../common/utils.js'
import recordReadme from './plugins/recordReadme.js'

export default async function (inputs, mode) {
  const options = {
    input: inputs,
    external: [/@babel\/runtime/],
    preserveEntrySignatures: 'strict',
    plugins: [
      recordReadme(),
      typescript({
        tsconfig: './tsconfig.json'
      }),
      cjs(),
      babel({
        babelHelpers: 'runtime',
        exclude: '**/node_modules/**',
        extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx']
      }),
      del({
        targets: returnDelDir(mode)
      }),
      terser()
    ]
  }
  try {
    const rBuild = await rollup(options)
    const targetOptions = returnTargetOptions(mode)
    for (let i in targetOptions) {
      const item = targetOptions[i]
      // 写入
      await rBuild.write(item)
    }
  } catch (err) {
    console.log('rollup build error:', err)
  }
}
