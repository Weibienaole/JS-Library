/*
<--README
<n:lazyImage>
<d:Img懒加载实现>
<d:需要设置html中的img src为空，data-src属性为目标路径>
<d:必须等待加载目标的 data-src 属性赋值完毕，再执行此方法>
```javascript
<p:
@param {string} 需要懒加载Img的统一className命名，亦或者不传，直接获取全量img元素
>
// example:
// html：
<img src={null} data-src="targetSrc" className='lazyImg' />
// js
lazyImage('lazyImg') // lazyImg 类名所有img实现懒加载
```
README-->
*/
import { ILazyImageThrottle } from "../../../typings/devtools"

// 必须等待加载目标的 data-src 属性赋值完毕，再执行此方法
const lazyImage = (className?: string | undefined): void => {
  // 懒记载图片列表，将伪数组转为数组，以便可以使用数组的api
  let imageElements = Array.prototype.slice.call(
      className
        ? document.querySelectorAll(`.${className}`)
        : document.getElementsByTagName('img')
    ),
    _throttleFn: any
  // 只针对具有参数的值进行处理
  imageElements = imageElements.filter(
    (item: HTMLImageElement) => item.dataset.src
  )
  const init = () => {
    // 通过IntersectionObserver api判断图片是否出现在可视区域内，不需要监听Scroll来判断
    if ('IntersectionObserver' in window) {
      let lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry: any, index) => {
          // 如果元素可见
          if (entry.isIntersecting) {
            let lazyImage = entry.target
            lazyImage.src = lazyImage.dataset.src
            lazyImage.classList.remove('lazy-image')
            lazyImageObserver.unobserve(lazyImage)
            imageElements.splice(index, 1)
          }
        })
      })
      imageElements.forEach((lazyImage: HTMLElement) => {
        lazyImageObserver.observe(lazyImage)
      })
    } else {
      inViewShow()
      _throttleFn = throttle(inViewShow)
      document.addEventListener('scroll', _throttleFn.bind(this))
    }
  }
  const inViewShow = () => {
    let len = imageElements.length
    for (let i = 0; i < len; i++) {
      let imageElement = imageElements[i]
      const rect = imageElement.getBoundingClientRect()
      // 出现在视野的时候加载图片
      if (rect.top < document.documentElement.clientHeight) {
        imageElement.src = imageElement.dataset.src
        // 移除掉已经显示的
        imageElements.splice(i, 1)
        len--
        i--
        if (imageElements.length === 0) {
          // 如果全部都加载完 则去掉滚动事件监听
          document.removeEventListener('scroll', _throttleFn)
        }
      }
    }
  }
  // 节流
  const throttle: ILazyImageThrottle = (fn, delay = 100, mustRun = 30) => {
    let t_start = 0
    let timer: NodeJS.Timeout
    let context = this
    return function () {
      let t_current = +new Date()
      let args = Array.prototype.slice.call(arguments)
      clearTimeout(timer)
      if (!t_start) {
        t_start = t_current
      }
      if (t_current - t_start > mustRun) {
        fn.apply(context, args)
        t_start = t_current
      } else {
        timer = setTimeout(() => {
          fn.apply(context, args)
        }, delay)
      }
    }
  }

  init()
}

export default lazyImage