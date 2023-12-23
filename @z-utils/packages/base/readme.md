
# 渣渣宇的开发工具包@base
    
## 安装

```javascript
npm i @utils/base -S
yarn add @utils/base -S
```

## 使用

```javascript
import { isPhone, bottomVisible, Img } from '@utils/base' // 按需加载

// example：
isPhone(13412341234) // true

bottomVisible() // false

<Img></Img>
```
## 更新日志
- 2023-12-23 version：1.0.4
  - 新增无副作用标识
- 2023-12-21 version：1.0.0
  - 首次更新
- 2023-12-21 version：0.1.0
  - 初始化
## 包简述
### devtools
#### JSB_appMethod
- js调用app方法
```javascript
/**
@param {string} 事件名
@param {any} 传递给app的参数
@return Promise<void*/
>
// example:
JSB_appMethod(name, data).then(() => console.log('success!'))
```
#### JSB_init
- JSB系列方法初始化
- 调用JSB_后缀的方法前必须先调用此方法进行初始化
```javascript
// example:
JSB_init() // 直接使用即可
```
#### allEquals
- 全等判断
- 在两个变量之间进行深度比较以确定它们是否全等。
```javascript
/**
@param {any} 对比项A
@param {any} 对比项B
@return boolean
*/
// example:
allEquals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }); // true
```
#### bottomVisible
- 检查页面底部是否可见
```javascript
/**
@return boolean
*/
```
#### JSB_jsMethod
- app 调用 js 方法 交互事件注册
```javascript
/**
@param {string} 事件方法
@return Promise<data*/ data-> app提供的参数
>
// example:
JSB_jsMethod('openModel').then(() => {
  this.openModel()
})
```
#### changeTimeYear
- 接受 ms 级的时间戳
- 时间格式转化年
- 个位自动补零
```javascript
/**
@param {string | number} 时间
@return string 时间戳
*/
// example:
changeTimeYear(new Date().valueOf()) // -> YYYY-MM-DD
```
#### debounce
- 防抖
```javascript
/**
@param {function} 执行函数 
@param {number} wait 间隔时间(ms)
@return function 设置防抖后的函数
*/
// example:
const fn = () => {
  ++a
}
const debounceFn = debounce(fn, 300)

// 执行 debounceFn 即可
```
#### deepClone
- 深拷贝
```javascript
/**
@param {T} 拷贝内容
@return T
*/
// example:
const o = {
  a: [
    {
      b: 1
    }
  ]
}
const cloneO = deepClone(o)
```
#### copyToClipboard
- 将字符串复制到剪贴板
```javascript
/**
@param {string} 拷贝内容
*/
// example:
copyToClipboard('Lorem ipsum') // 'Lorem ipsum' copied to clipboard
```
#### deleteHTMLTags
- 从字符串中删除HTML / XML标签。
```javascript
/**
@param {string} 需要处理的HTML字符串
@return string 处理后的字符串
*/
// example:
const html = '<span>i am zzy</span>'
const pureHTMLCon = deleteHTMLTags(html) // i am zzy
```
#### detectDeviceType
- 检测移动/PC设备
```javascript
/**
@return 'Mobile' | 'Desktop'  移动端/PC端
*/
```
#### elementIsVisibleInViewport
- 检查指定的元素在视口中是否可见
```javascript
/**
@param {HTMLElement} el 被指定的元素
@param {boolean} partiallyVisible = false false:左右可见 true:全屏(上下左右)可见
@return 
*/
// example:
elementIsVisibleInViewport(el); // 需要左右可见
elementIsVisibleInViewport(el, true); // 需要全屏(上下左右)可以见
```
#### exitFullscreen
- 关闭全屏模式
```javascript
```
#### formatFileSize
- B转换到KB,MB,GB并保留两位小数
```javascript
/**
@param {number} fileSize
@return string 转换后的值
*/
// example: 以 1000 整除模拟，方法内为 1024 标准除
formatFileSize(300421) // 300.421KB
formatFileSize(3004221221) // 3.004GB
```
#### formatNowTime
- 时间戳转化为当前时间
```javascript
/**
@param {number | string} time
@return string YYYY-MM-DD hh:mm:ss
*/
// example:
formatNowTime(now Date().valueOf()) // 2023-12-20 17:31:22
```
#### formatMoney
- 金钱格式化，间隔点为3
```javascript
/**
@param {number | string} val
@return string 
*/
// example:
formatMoney(12345678) // 123,456,78
```
#### formateSeconds
- 格式化 天:时:分:秒
```javascript
/**
@param {number | string} dosurPlusTimem 剩余时间戳 - 单位为 s
@return string dd:hh:mm:ss
*/
// example:
formateSeconds(86400) // 01:00:00:00
formateSeconds(3600) // 00:01:00:00
```
#### generateTree
- 根据数组生成树结构
```javascript
/**
@param {IGenerateTreeListItem[]} items 待转化结构 id,children,any
@param {null | number | string = null} parentId 首级id
@param {string = 'parentId'} selectVal tree关联id
@return any tree结构
*/
// example:
const comments = [
  { id: 1, parentId: null },
  { id: 2, parentId: 1 },
  { id: 3, parentId: 1 },
  { id: 4, parentId: 2 },
  { id: 5, parentId: 4 }
];
generateTree(comments)
{
  id: 1,
  children: [
    {
      id: 2,
      children: [
        {
          id: 4,
          children: [
            {
              id: 5,
              children: []
            }
          ]
        }
      ]
    },
    {
      id: 3,
      children: []
    }
  ]
}
```
#### getColonTimeFromDate
- 返回当前24小时制时间的字符串
```javascript
/**
@param {Date} 当前Date时间
@return string hh:mm:ss
*/
// example:
getColonTimeFromDate3(new Date()) // 18:31:21
```
#### getUrlData
- 获取目标地址参数
```javascript
/**
@param {string} 地址
@return { [key: string]: string }
*/
// example:
const url = https://www.baidu.com/s?ie=UTF-8&wd=github
getUrlData(url) // { ie: 'UTF-8', wd: 'github' }
```
#### getScrollPosition
- 取当前页面的滚动位置
```javascript
/**
@param {Window | HTMLElement} 可选元素，默认Window位置
@return { x: number; y: number } 当前位置
*/
// example:
getScrollPosition(); // {x: 0, y: 200}
```
#### getDomStyle
- 返回指定元素的生效样式
```javascript
/**
@param {HTMLElement} 指定的元素
@param {any} 指定的样式
@return string
*/
// example:
getDomStyle(document.querySelector('p'), 'font-size') // 14px
```
#### infinityScrolling
- 无限滚动
- 回调第一行必须设置 infinityScrollIng 的bol 属性为 false，意味着已经进程已经开始，必须等待结束(失败或者成功)才可以重新为true，才可以进行下一次的回调触发
- react具体实现组件为 ScrollLoadingBar
```javascript
/**
@param {HTMLElement} 目标节点
@param {Function} 当目标节点出现在可是区域内后出发此回调。以此实现无限滚动
@param {可选：关闭监听(只有在监听滚动条时才会有效，否则无效，可忽略(针对低版本浏览器启用监听滚动条方式进行处理))} devtools.infinityScrollIng.closeMonitor()
@return 
*/
// example:
devtools.infinityScrollIng(document.querySelector('.bottomScrollBar'), ()=>{
// 回调第一行必须设置 infinityScrollIng 的bol 属性为 false，意味着已经进程已经开始，必须等待结束(失败或者成功)才可以重新为true，才可以进行下一次的回调触发
devtools.infinityScrollIng.bol = false
//  ...some code
devtools.infinityScrollIng.bol = true // done
})
```
#### isAndroidPlatform
- 当前设备是否是 android
```javascript
/**
@return boolean 是否为安卓系统
*/
```
#### isEmptyObject
- 判断对象是否为空
```javascript
/**
@param {object} 目标对象
@return boolean
*/
// example:
if(isEmptyObject(obj)) return
// ...some code
```
#### isBrowserTabFocused
- 检查当前标签页是否活动
```javascript
/**
@return boolean 是否活动
*/
```
#### launchFullscreen
- 某个元素开启全屏
```javascript
/**
@param {HTMLDOM} 接受一个 dom 作为参数
*/
// example:
launchFullscreen(document.querySelectorById('test'))
```
#### lazyImage
- Img懒加载实现
- 需要设置html中的img src为空，data-src属性为目标路径
- 必须等待加载目标的 data-src 属性赋值完毕，再执行此方法
```javascript
/**
@param {string} 需要懒加载Img的统一className命名，亦或者不传，直接获取全量img元素
*/
// example:
// html：
<img src={null} data-src="targetSrc" className='lazyImg' />
// js
lazyImage('lazyImg') // lazyImg 类名所有img实现懒加载
```
#### preventScroll
- 固定滚动条
- 功能描述：一些业务场景，如弹框出现时，需要禁止页面滚动，这是兼容安卓和 iOS 禁止页面滚动的解决方案
```javascript
/**
@param {number} y轴 Number 需要被定位的 y 或者不传，默认 window.scrollY
@return number 当前被定住的 y 
*/
// example:
preventScroll
```
#### recoverScroll
- 恢复滚动条
- 如果配合 preventScroll 方法使用需要现将 固定前的滚动条高度记录，再恢复时赋值给 recoverScroll 方法
```javascript
/**
@param {number} 被恢复位置 Y
*/
// example:
recoverScroll(200) y200的高度恢复，相当于滚动至200
```
#### rewirteLog
- 不显示 console.log
- 重写log为空函数
#### scrollToTop
- 平滑滚动至顶部
- 该代码段可用于平滑滚动到当前页面的顶部。
#### smoothScroll
- 滚动到指定元素区域
- 该代码段可将指定元素平滑滚动到浏览器窗口的可见区域。
```javascript
/**
@param {keyof HTMLElementTagNameMap} 指定的dom
*/
// example:
smoothScroll11('#fooBar')
```
#### setDomRem
- rem实现
- rem*16px
- 以蓝湖rem设置为标准 设置16px的rem就是 *8
```javascript
/**
@param {number = 8} 比例
*/
// example:
setDomRem(16) 1:32(蓝狐设计图)
```
#### strTrim
- 去除空格
```javascript
/**
@param {string} 待处理字符串
@param {1 | 2 | 3 | 4}  去除空格类型 1-所有空格  2-前后空格  3-前空格 4-后空格 默认为1
@return string 处理后的内容
*/
// example:
const str = ' 1233 4'
strTrim(str, 1) // 12334
```
#### typeOf
- 增强版typeOf
- typeOf 关键字对于null，date 都会认为是Object，不准确, 使用Object.prototype.toString.call
```javascript
/**
@param {any} 判断值
@return string
*/
```
#### throttle
- 节流
```javascript
/**
@param {Function} func 执行函数
@param {Number} wait 间隔时间 ms
@param { leading?: boolean,trailing?: boolean } 可选options
{leading: 调用后是否立即执行一次,trailing: 结束后是否还要执行一次} 默认都为true，但都不能为false
@return  Function
*/
// example:
const fn = (n) => {
  a += n
}
const throttleFn = throttle((n) => fn(n))
```
### regModules
#### isAccountNumber
- 验证银行卡号
- 10到30位, 覆盖对公/私账户, 参考微信支付
```javascript
/**
@param {string} account
@return boolean
*/
```
#### isCreditCode
- 验证统一社会信用代码
```javascript
/**
@param {string} calue
@return boolean
*/
```
#### isEmail
- 邮件 email
```javascript
/**
@param {string} value
@return boolean
*/
```
#### isEnglish
- 是否全部为英文
```javascript
/**
@param {string} dom
@return boolean
*/
```
#### isColor16
- 验证16进制颜色
```javascript
/**
@param {string} val
@return boolean
*/
```
#### isExternal
- 判读是否为外链
```javascript
/**
@param {string} path
@return boolean
*/
```
#### isHttpAndPort
- 验证必须带端口号的网址(或ip)
```javascript
/**
@param {string} port
@return boolean
*/
```
#### isIdCard
- 验证身份证
```javascript
/**
@param {string} idcard
@return boolean
*/
```
#### isImageUrl
- 验证图片链接地址
- 图片格式可按需增删
```javascript
/**
@param {string} src
@return boolean
*/
```
#### isIMEI
- 验证手机机身码(IMEI)
```javascript
/**
@param {string} imei
@return boolean
*/
```
#### isInteger
- 是否为整数
```javascript
/**
@param {string} dom
@return boolean
*/
```
#### isLandlineTelephone
- 验证座机电话(国内),如: 0341-86091234
```javascript
/**
@param {string} phone
@return boolean
*/
```
#### isLicensePlateNumber
- 验证车牌号(新能源+非新能源)
```javascript
/**
@param {string} val
@return boolean
*/
```
#### isMoney
- 价格、金额  带小数的正数，小数点后最多两位
```javascript
/**
@param {string} value
@return boolean
*/
```
#### isName
- 是否为汉字（姓名）
```javascript
/**
@param {string} name
@return boolean
*/
```
#### isPassport
- 验证护照（包含香港、澳门）
```javascript
/**
@param {string} value
@return boolean
*/
```
#### isPassword
- 密码校验
- a-z A-Z 0-9  long 6 < val < 21
```javascript
/**
@param {string} value
@return boolean
*/
```
#### isPhoneStrict
- 验证手机号中国(严谨), 根据工信部2019年最新公布的手机号段
```javascript
/**
@param {string} value
@return boolean
*/
```
#### isPhone
- 手机号
```javascript
/**
@param {string} value
@return boolean
*/
```
#### isTrainNum
- 验证火车车次
```javascript
/**
@param {string} value
@return boolean
*/
```
#### isUrl
- 验证链接是否有效
```javascript
/**
@param {string} value
@return boolean
*/
```
#### isPostcode
- 验证邮政编码(中国)
```javascript
/**
@param {string} value
@return boolean
*/
```
#### isThunderLink
- 验证迅雷链接
```javascript
/**
@param {string} url
@return boolean
*/
```
#### isVersion
- 验证版本号格式必须为X.Y.Z
```javascript
/**
@param {string} value
@return boolean
*/
```
#### isWeChatNum
- 验证微信号
- 6至20位，以字母开头，字母，数字，减号，下划线
```javascript
/**
@param {string} value
@return boolean
*/
```
#### isWindowsFilePath
-  验证window下"文件"路径
```javascript
/**
@param {string} value
@return boolean
*/
```
#### isVideoUrl
- 验证视频链接地址
```javascript
/**
@param {string} value
@return boolean
*/
```
#### isWindowsFolderPath
- 验证window"文件夹"路径
```javascript
/**
@param {string} value
@return boolean
*/
```

    