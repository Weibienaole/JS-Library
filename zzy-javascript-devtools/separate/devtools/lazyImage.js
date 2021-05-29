export default function lazyImage(className = null) {
  // 懒记载图片列表，将伪数组转为数组，以便可以使用数组的api      
  let imageElements = Array.prototype.slice.call(className ? document.querySelectorAll(className) : document.getElementsByTagName('img')), _throttleFn
  // 只针对具有参数的值进行处理
  imageElements = imageElements.filter(item => item.dataset.src)
  init()
  function inViewShow() {
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
  function throttle(fn, delay = 100, mustRun = 30) {
    let t_start = null
    let timer = null
    let context = this
    return function () {
      let t_current = +(new Date())
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
  function init() {
    // 通过IntersectionObserver api判断图片是否出现在可视区域内，不需要监听Scroll来判断      
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
          // 如果元素可见            
          if (entry.isIntersecting) {
            let lazyImage = entry.target
            lazyImage.src = lazyImage.dataset.src
            lazyImage.classList.remove("lazy-image")
            lazyImageObserver.unobserve(lazyImage)
            imageElements.splice(index, 1)
          }
        })
      })
      imageElements.forEach(function (lazyImage) {
        lazyImageObserver.observe(lazyImage);
      })
    } else {
      inViewShow()
      _throttleFn = throttle(inViewShow)
      document.addEventListener('scroll', _throttleFn.bind(this))
    }
  }
}