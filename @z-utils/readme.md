# @z-utils 打包实现目录
# 目录：
- command：逻辑主体
  - plugins：rollup插件存放
    - recordReadme.ts 获取转译后的 每个文件内的特殊注释
  - generatorFiles.js：文件生成执行内容，生成范围包含：打包后的对外提供工具函数，
  - generatorReadme.js：生成向外提供的readme.md
  - packageControler.js 控制打包后的package.json
  - rollupBuild.js 打包程序
  - start.js 脚本执行文件，记录基本信息
- common：公共内容
  - constant.js：常量
  - utils.js：公共函数
- content：对外提供工具函数内容存放路径
- packages：打包后存放路径
- readmes： 打包后readme拼接内容预设
  - header.md：头部带拼接内容
  - updates.json：记录每次更新信息，供日志段落拼接
- typings：被打包内容typings(待使用)
- example.ts 对外提供工具函数的注释举例，严格按照，否则无法正常生成对应readme内容

# 和 zzy-javascript-devtools 有什么差别？
- 算是`zzy-javascript-devtools`的重构版本，支持之前的所有内容
- 对内（开发）：
  - 使用rollup重构打包逻辑
  - 全自动化打包生成
  - 自动生成更新日志以及版本号
  - 全自动化生成对应包的readme.md文件
  - 文件分级更加明确
  - 扩展性提升
  - 统一开发格式
- 对外（使用）：
  - 开放cjs模式
  - readmd.md文件更加合理，格式统一
  - 新增对vue的支持，以及纯工具包，避免额外开销(分三个包分别按项目决定用哪个)
  - 未来迭代逐渐开放对hooks函数的支持

# 后期迭代待完成事项
- 自动发布
- ts类型声明
- 追加vue/react相关内容
