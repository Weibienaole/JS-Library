# 渣渣宇的开发工具包

## 目前分为三类，正则(regModules) 、 常用的方法(devtools) 和 React 组件(ReactComponents)

## 安装

```javascript
npm i zzy-javascript-devtools
```

## 使用

```javascript
import { regModules, devtools, ReactComponents } from 'zzy-javascript-devtools'
import { isPhone, bottomVisible, Img } from 'zzy-javascript-devtools' // 按需加载

// regModules 为正则模块  devtools 为方法模块  ReactComponents 为 React组件  JSBridge 为 JS&app交互事件
// example：
regModules.isPhone(13412341234) // true
isPhone(13412341234) // true

devtools.bottomVisible() // false
bottomVisible() // false

<ReactComponents.Img></ReactComponents.Img>
<Img></Img>
```

## 版本更新历史

- 1.4.1
  - 补充和修改一些信息
  - 优化命令文件
- 1.4.0
  - 此版本开始，zzy-javascript-devtools 实现按需加载😎
    - 按需加载将保证向下版本兼容的同时实现按需加载(依旧可以用 devtools.bottomVisible() 方式来进行使用)
    - 由于按需加载的实现导致某些方法需要更改，如果您在使用时发现了异常请及时联系作者(E-mail: weibienaole@163.com)
  - reactComponents 组件类
    - 部分组件的样式以style形式写入(原.css,这样就不会导致部分 webpack exclude 之后报错，或者警告)
    - ScrollLoadingBar 组件由于按需加载模式，进行了必要的更改，详情请在下方查看
  - 需要声明的一点是，由于按需加载的实现方式是利用了 tree shaking，所以内部都是ES6的导入导出，使用前需要清楚在此项目中是否可能存在兼容性问题(IE部分、超低版本部分)(使用 @babel/preset-env 进行了转化(modules: false)，但没有使用 core-js )
  - 目前来看的话，prod压缩后大小减少了 10% - 30% 左右，虽然目前不太明显，但这个模式对未来无疑是非常有利的，所以还是很有意义的😉
- 1.3.6
  - 修复 Img 组件 某些情况下 .default 报错
- 1.3.5
  - 修复 TopBar 组件 状态异常
- 1.3.4
  - 遗漏bug
- 1.3.3
  - lib 删除 .less 文件
- 1.3.2
  - 经过一系列的排查，我终于意识到了压缩代码的严重性... 所以从此版本开始不再进行代码压缩，只进行语法转译(裂开.jpg)
  - 由于取消了代码压缩，所以JSBridge可以合并到devtools里(所以说我这几个版本改了个寂寞？？)
  - 修复一些奇怪的bug
- 1.3.1
  - 新增 JSBridge 组，旧 JSBridge 由于压缩问题无法正常使用-。=
  - 优化 uglifyjs.js 更加简洁，归拢命令文件
  - Ps: 为什么每次都能忘记标注一些东西呢...
- 1.3.0
  - devtools
    - 新增一个之前未标明的方法，并进行优化
    - 新增 app 调用 js 方法
- 1.2.9
  - 本次改动目的为优化、压缩
    - 将所有文件进行压缩处理，更加精致
- 1.2.6 & 1.2.7 & 1.2.8
  - ReactComponents
    - NoData 组件支持自定义图片，并可以传入 style props 来设置图片的大小
    - Img 组件
      - 防止 require 搞事情，新增一个简单的兼容
      - 新增 click 点击事件，可以点击图片做一些事情
    - TopBar 组件 代码简化，箭头图片换成了 svg 格式
    - readme.md 更新
- 1.2.5
  - 新增 React Components
  - 大幅减少包大小 现在压缩之后仅 3.1k
  - 由于 react 需要转化为 ES5，顺便将所有的文件转译成了 ES5 语法
  - 调整 readme.md 的布局，不再拉垮

## 简述

### regModules

#### 正则模块方法返回值皆为 **Boolean**

- 身份证 **isIdCard(idCard)**

- 验证护照（包含香港、澳门） **isPassport(val)**
- 手机号 **isPhone(phone)**
- 验证手机号中国(严谨), 根据工信部 2019 年最新公布的手机号段 **isPhoneStrict(phone)**
- 验证座机电话(国内),如: 0341-86091234 **isLandlineTelephone(phone)**
- 姓名 **isName(name: 汉字)**
- 英文 **isEnglish(val)**
- 整数 **isInteger(val)**
- 密码 **isPassword(val)** a-z A-Z 0-9 long 6 < val < 21
- 邮箱 **isEmail(val)**
- 地址 **isUrl(val)**
- 价格、金额 **isMoney(val)** 带小数的正数，小数点后最多两位
- 验证邮政编码(中国) **isPostcode(val)**
- 验证微信号，6 至 20 位，以字母开头，字母，数字，减号，下划线 **isWeChatNum(val)**
- 验证 16 进制颜色 **isColor16(val)**
- 验证火车车次 **isTrainNum(val)**
- 验证手机机身码(IMEI) **isIMEI(val)**
- 验证必须带端口号的网址(或 ip) **isHttpAndPort(val)**
- 验证统一社会信用代码 **isCreditCode(val)**
- 验证迅雷链接 **isThunderLink(val)**
- 验证 window"文件夹"路径 **isWindowsFolderPath(val)**
- 验证 window 下"文件"路径 **isWindowsFilePath(val)**
- 验证版本号格式必须为 X.Y.Z **isVersion(val)**
- 验证视频链接地址（视频格式可按需增删） **isVideoUrl(val)**
- 验证图片链接地址（图片格式可按需增删） **isImageUrl(val)**
- 验证银行卡号（10 到 30 位, 覆盖对公/私账户, 参考微信支付） **isAccountNumber(val)**
- 验证车牌号(新能源+非新能源) **isLicensePlateNumber(val)**
- 判读是否为外链 **isExternal(path)**

### devtools

##### 算法类

###### generateTree(list, parentId, selectVal)

- 参数 ( 初始数组, 默认 id = null, 以哪个元素为 ID 进行生成 = 'parentId')
- 根据数组生成树结构
- 返回一个新的数组

```javascript
generateTree(初始数组, 默认id = null, 以哪个元素为ID进行生成 = 'parentId')
// 初始数组
const comments1 = [
  { id: 1, parentId: null },
  { id: 2, parentId: 1 },
  { id: 3, parentId: 1 },
  { id: 4, parentId: 2 },
  { id: 5, parentId: 4 }
];
// 拿到
[{id: 1, parentId: null, children: [{...}]}]

```

###### allEquals(a,b)

- 全等判断 ---> 在两个变量之间进行深度比较以确定它们是否全等。
- 返回 Boolean

##### 时间

###### getColonTimeFromDate(time)

- 接受一个 new Date() 的值
- 返回 24 小时制时间的字符串

###### getDaysDiffBetweenDates(start, end)

- 接受一个 new Date() 的值
- 返回两个日期之间的差值(天)

###### changeTimeYear(time)

- 时间格式转化年
- 接受 ms 级的时间戳

###### formateSeconds(time)

- 格式化 天:时:分:秒
- 接受一个 剩余时间(s)

###### formatNowTime(time)

- 时间戳转化为当前时间
- 接受 ms 级的时间戳

##### browser

###### bottomVisible()

- 检查页面底部是否可见

###### isBrowserTabFocused()

- 检查当前标签页是否活动

###### scrollToTop()

- 平滑滚动至顶部 --> 该代码段可用于平滑滚动到当前页面的顶部。

###### smoothScroll('id|class')

- 滚动到指定元素区域 --> 该代码段可将指定元素平滑滚动到浏览器窗口的可见区域。
- 该参数接受一个 dom 的类名/id

###### getScrollPosition(el = window)

- 取当前页面(元素)的滚动位置
- 该参数接受一个 dom 元素，默认为 window
- 返回 {x: , y: }

###### preventScroll(scrollNum)

- 固定滚动条
- 功能描述：一些业务场景，如弹框出现时，需要禁止页面滚动，这是兼容安卓和 iOS 禁止页面滚动的解决方案
- 接受一个 y 轴 Number

###### recoverScroll(scrollNum)

- 恢复滚动条
- 接受一个 y 轴 Number 如果配合 preventScroll 方法使用需要现将 固定前的滚动条高度记录，再恢复时赋值给 recoverScroll 方法

###### elementIsVisibleInViewport(el, partiallyVisible = false)

- 检查指定的元素在视口中是否可见
- elementIsVisibleInViewport(el); // 需要左右可见
- elementIsVisibleInViewport(el, true); // 需要全屏(上下左右)可以见

###### launchFullscreen(el)

- 某个元素开启全屏
- 接受一个 dom 作为参数

###### exitFullscreen()

- 关闭全屏模式

##### js

###### formToObject(form)

- 将一组表单元素转化为对象
- formToObject(document.querySelector('#form')); ---> { email: 'test@email.com', name: 'Test Name' }

###### copyToClipboard(str)

- 将字符串复制到剪贴板
- 接受一个 string 作为参数

###### formatMoney(val)

- 金钱格式化，三位加逗号
- 接受一个 Number

###### formatFileSize(fileSize)

- B 转换到 KB,MB,GB 并保留两位小数 参数接受一个 b 字节 为单位的值
- 接受一个 String
- 返回一个 String

###### strTrim(str, type = 1)

- 去除空格
- str: 待处理字符串
- type: 去除空格类型 1-所有空格 2-前后空格 3-前空格 4-后空格 默认为 1
- 返回一个 String

###### detectDeviceType()

- 检测移动/PC 设备
- 返回一个 String 'Mobile' -> 移动端 'Desktop' -> PC 端

###### isAndroidPlatform()

- 当前设备是否是 android
- 返回一个 Boolean true -> Android false -> iOS

###### getUrlData(url)

- 获取地址栏参数
- 该参数接受一个正确的 url 地址
- 返回一个对象 {参数名: 对应的值, ...}

###### setDomRem(num)

- rem.js
- 该参数接受一个数值为 html 标签的 font-size 赋值
- 直接调用即可。

##### rewirteLog()

- 生产环境不显示 console.log

###### typeOf(data)

- 增强版 typeOf
- 该参数接受一个需要解析的值
- 返回一个解析之后的值

###### deepClone(target)

- 深拷贝
- 接受一个需要拷贝的内容
- 返回一个拷贝之后的内容

###### lazyImage()

- 启用图片懒加载
- 需要设置 html 中的 img src 为空，data-src 属性为目标路径
- 必须等待加载目标的 data-src 属性赋值完毕，再执行此方法

###### debounce(func, wait, immediate)

- 函数防抖
- 参数： 执行函数, 等待时间, 是否立即执行一次(默认 true)
- 可选方法
- let debounce = debounce(func, wait, immediate)
- debounce.cancel 关闭防抖

```javascript
// example: (Vue) 其余同理
// 1.先在 data 中设置防抖目标
data(){
  return{
    debounceFn: debounce(this.fn, 1000, true)
  }
},
methods:{
  fn(){
    console.log('我不是渣渣宇-。=')
  },
// 2. 执行时直接调用防抖函数的返回值(this.data.debounceFn)即可
  click(){
    this.debounceFn() // 首次执行，之后一秒内如果重复触发则在最后一次触发的一秒后执行
  }
}
```

###### throttle(func, wait, options)

- 函数节流
- 参数： 执行函数, 间隔时间, {leading: 调用后是否立即执行一次,trailing: 结束后是否还要执行一次} 默认都为 true，但都不能为 false
- 可选方法
- let throttle = throttle(func, wait, options)
- throttle.cancel 关闭节流
- 示例和防抖函数差不多，大概就是这个意思

###### infinityScrolling(dom, cb)

- 无限滚动

```javascript
/**
   @param {目标节点} dom 是一个在最底层的div，wid=0 hei=0 opac=0
   @param {Function} cb  callback 回调函数
   @param {可选：关闭监听(只有在监听滚动条时才会有效，否则无效，可忽略(针对低版本浏览器启用监听滚动条方式进行处理))} 
   */

// example:
infinityScrolling(document.querySelector('.bottomScrollBar'), () => {
  // 回调第一行必须设置 infinityScrolling 的bol 属性为 false，意味着已经进程已经开始，必须等待结束(失败或者成功)才可以重新为true，才可以进行下一次的回调触发
  infinityScrolling.open = false
  //  ...some code
  infinityScrolling.open = true // done
})
```

##### html

###### deleteHTMLTags(str)

- 从字符串中删除 HTML / XML 标签。
- 接受一个 string 类型的值
- 返回一个 String 类型的值

##### css

###### getDomStyle(el, ruleName)

- 参数 el -> dom ruleName -> 样式名称
- 返回指定元素的生效样式
- example: getDomStyle(document.querySelector('p'), 'font-size')

##### 与app之间的交互(JSBridge)

- 交互处理方式 ios/android 通用
- 前置条件：必须先在 html/框架(入口文件)内调用 JSBriged.init 方法进行初始化

###### JSB_init

- 初始化 JSBridge

###### JSB_appMethod

- js 调用 app 方法

```javascript
// js 调用 app 方法
/**
 * @param {String} name 事件名
 * @param {any} data 参数 - 仅有调app事件持有
 */
JSB_appMethod(name, data).then((res) => {
  // ... some code
})
```

###### JSB_jsMethod

- app 调用 js 方法

```javascript
// app 调用 js 方法
/**
 * @param {String} name 事件名
 */
JSB_jsMethod(name).then((res) => {
  /**
   * name: 事件名
   */
})
```
#####

- 这个交互事件必须由 app 和前端一起去处理，单方面是无法成功的
  可以参考这篇文章： https://blog.csdn.net/zgd826237710/article/details/95518433

### ReactComponents

- 组件内使用的rem与px比例为 1 : 8(iPhone6/7/8下)  setDomRem 方法设置为 16，若需要更改直接更改style样式即可

##### 无限滚动触发块(搭载 devtools.infinityScrolling) ScrollLoadingBar

- 低版本使用 scroll 监听处理时自带 100ms 节流
- 需要在触发事件内开始时，getDataBol 为 false，表示数据获取进行中，等待接口数据返回，有值则 getDataBol 为 true，反之为 false

```javascript
/**
 * props:
 * @param {Function} getMoreData 链接到触发事件
 * @param {Boolean} getDataBol 是否进行下一次触底判定(不触底说明已没有更多数据)
 * */

// example:
import { ScrollLoadingBar } from 'zzy-javascript-devtools';
<ScrollLoadingBar
  getMoreData={() => this.getData()}
  getDataBol={this.state.dataMoreBol}
></ScrollLoadingBar>
```

##### 错误边界 ErrorBoundary

- 请在 App.js 中用此组件将 Route 组件包裹即可展示错误之后的 UI 信息
- 它在渲染期间、生命周期方法和整个组件树的构造函数中捕获错误
- 无法捕获 事件处理，异步代码等错误

```javascript
import { ErrorBoundary } from 'zzy-javascript-devtools';
<ErrorBoundary>
  // 包裹住 Route
  <Route />
</ErrorBoundary>
```

##### 懒加载图片标签(配合 devtools.lazyImage() 方法使用) Img

- 必须等待加载目标的 data-src 属性赋值完毕，再执行此方法，否则无法显示
- 在第一轮图片数据加载完成之后 调用 devtools.lazyImage() 启用懒加载

```javascript
/**
 * @param {String} className 赋予的类名
 * @param {String} src 目标地址
 * @param {Function} click 具有点击事件能力
 */

// example:
import { Img } from 'zzy-javascript-devtools';
<Img
  src="link"
  className="className"
  click={() => console.log('click!')}
></Img>
```

##### 无数据显示组件 NoData

```javascript
/**
 *  @param {String} say 文案
 *  @param {Object} style 样式 就像给普通标签写样式一样添加style即可
 *  @param {String} src 图片地址
 * */

// example
import { NoData } from 'zzy-javascript-devtools';
<NoData
  say={'asasasas'}
  style={{ width: '16.25rem', height: '15.69rem' }}
  src={require('./image/noData.png')}
></NoData>
```

##### 顶部栏 TopBar

```javascript
/**
 *  @param {String} type 主题
 *    0 - 黑色主题
 *    1 - 白色
      不传  默认为白色主题，背景为空(透明)
 *  @param {Boolean} noArrow 是否隐藏箭头
 *    true - 隐藏
 *    false - 显示
 *  @param {Function} arrowBack 返回事件
 *  @param {String} title 标题
 *  @param {String} rigTxt 右侧文字 不传则隐藏
 *  @param {Function} clickRigTxt 右侧点击事件
 * */

// example:
import { TopBar } from 'zzy-javascript-devtools';
<TopBar
  type="0"
  title="i am title"
  rigTxt="iam rigTxt"
  arrowBack={() => this.back()}
  clickRigTxt={() => this.secrch()}
></TopBar>
```
