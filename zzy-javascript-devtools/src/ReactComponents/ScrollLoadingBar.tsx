import React, { Component } from 'react'

// 无限滚动触发块，直接链接触发事件即可
// 需要在触发事件内结束时 赋值 devtools.infinityScrolling.bol = true
/*
  props
    getMoreData Function 加载更多
    getDataBol Boolean 是否进行下一次判定(有值的话true)
*/

export default class ScrollLoadingBar extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  componentDidMount() {
    this.infinityScrolling(
      (document.querySelector('.scrollLoadingBar') as HTMLElement),
      (that: any) => {
        that.props.getMoreData()
      }
    )
  }
  componentWillUnmount() {
    this.infinityScrolling.closeMonitor()
  }

  // 无限滚动
  /**
   *
   * @param {目标节点} dom
   * @param {Function} cb
   * @param {可选：关闭监听(只有在监听滚动条时才会有效，否则无效，可忽略(针对低版本浏览器启用监听滚动条方式进行处理))} devtools.infinityScrollIng.closeMonitor()
   *
   *
   * example:
   * devtools.infinityScrollIng(document.querySelector('.bottomScrollBar'), ()=>{
   * // 回调第一行必须设置 infinityScrollIng 的bol 属性为 false，意味着已经进程已经开始，必须等待结束(失败或者成功)才可以重新为true，才可以进行下一次的回调触发
   * devtools.infinityScrollIng.bol = false
   * //  ...some code
   * devtools.infinityScrollIng.bol = true // done
   * })
   */
  infinityScrolling(dom: HTMLElement, cb: Function) {
    let that = this
    let throttleFn: any
    //  需要一个外界bol判断是否加载完毕 不完毕不再次触发
    if ('IntersectionObserver' in window) {
      let intersectionOb = new IntersectionObserver((entry) => {
        if (!that.props.getDataBol) return
        // 1 - 可视范围内 0 - 不在可视范围内
        if (entry[0].intersectionRatio) cb(that)
      })
      // 对 dom 启用监听
      intersectionOb.observe(dom)
    } else {
      // 启用节流 100ms
      throttleFn = throttle(monitorScroll, 100)
      // 开启监听
      document.addEventListener('scroll', throttleFn)
    }
    // 关闭监听 scroll监听时
    this.infinityScrolling.closeMonitor = function () {
      if ('IntersectionObserver' in window) return
      // 关闭节流
      throttleFn.cancel()
      // 取消监听
      document.removeEventListener('scroll', throttleFn)
    }
    // 监听滚动条要做的事情
    function monitorScroll() {
      // console.log(that.props.getDataBol);
      if (!that.props.getDataBol) return
      // 检查指定的元素在视口中是否可见
      if (elementIsVisibleInViewport(dom, true)) cb(that)
    }

    function throttle(fn: Function, delay: number = 100, mustRun: number = 30): Function {
      let t_start: any = null
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
    function elementIsVisibleInViewport(el: HTMLElement, partiallyVisible = false) {
      const { top, left, bottom, right } = el.getBoundingClientRect()
      const { innerHeight, innerWidth } = window
      return partiallyVisible
        ? ((top > 0 && top < innerHeight) ||
          (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) ||
          (right > 0 && right < innerWidth))
        : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
    }
  }
  render() {
    return (
      <div
        className="scrollLoadingBar"
        style={{ opacity: 0, width: '1px', height: '1px', zIndex: -1 }}
      ></div>
    )
  }
}

interface Props {
  getMoreData: Function
  getDataBol: boolean
}