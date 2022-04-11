import React, {
  useState,
  useEffect,
  forwardRef,
  useRef,
  useImperativeHandle,
  useMemo
} from 'react'
import BScroll from 'better-scroll'
import styled from 'styled-components'
import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll'

const ScrollSty = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const debounce: Debounce = (func, wait) => {
  let timer: NodeJS.Timeout
  return function (...args: any) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
      clearTimeout(timer)
    }, wait);
  }
}

const ScrollLoadingBarV2 = forwardRef((props: Props, ref) => {
  // 参数
  const {
    direction,
    click,
    refresh,
    bounceTop,
    bounceBottom,
    pullUpLoading,
    pullDownLoading
  } = props

  // 函数
  const { pullUp, pullDown, onScroll } = props

  // 指向需要scroll组件的ref
  const scrollRef = useRef<any>(null)

  // better-scroll 实例对象
  const [bScroll, setBScroll] = useState<BScrollConstructor>()

  // 防抖处理
  const pullUpDebounce = useMemo(() => {
    return debounce((pullUp as Function), 300)
  }, [pullUp])
  const pullDownDebounce = useMemo(() => {
    return debounce((pullDown as Function), 300)
  }, [pullDown])

  // 初始化创建 better-scroll 实例
  useEffect(() => {
    const scroll = new BScroll((scrollRef?.current), {
      scrollX: direction === 'horizontal',
      scrollY: direction === 'vertical',
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom
      },
      // chrome 模拟滚动
      mouseWheel: true
    })
    if (!bScroll) {
      setBScroll(scroll)
    }
    return () => {
      // 销毁时清理实例
      setBScroll(undefined)
    }
  }, [])

  // 获取数据之后重新刷新高度，获取最新的滚动条
  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh()
    }
  })

  // 绑定scroll实例
  useEffect(() => {
    if (!onScroll || !bScroll) return
    bScroll.on('scroll', (scroll: any) => {
      onScroll(scroll)
    })
    return () => {
      bScroll.off('scroll')
    }
  }, [onScroll, bScroll])

  // 上拉到底
  useEffect(() => {
    if (!pullUp || !bScroll) return
    bScroll.on('scrollEnd', () => {
      // 超越临界点判断
      // 上拉时为负值
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        
        pullUpDebounce()
      }
    })
    return () => {
      bScroll.off('scrollEnd')
    }
  }, [pullUp, bScroll, pullUpDebounce])

  // 下拉到顶
  useEffect(() => {
    if (!pullDown || !bScroll) return
    bScroll.on('touchEnd', () => {
      if (bScroll.y > 50) {
        pullDownDebounce()
      }
    })
    return () => {
      bScroll.off('touchEnd')
    }
  }, [pullDown, bScroll, pullDownDebounce])

  useImperativeHandle(ref, () => ({
    // 刷新scroll
    refresh() {
      if (!bScroll) return
      bScroll.refresh()
      bScroll.scrollTo(0, 0)
    },
    // 拿到scroll实例
    getScroll() {
      if (bScroll) {
        return bScroll
      }
      return null
    }
  }))
  return (
    <ScrollSty ref={scrollRef}>
      {props.children}
    </ScrollSty>
  )
})


type Debounce = (func: Function, wait: number) => Function

interface Props {
  [key: string]: any,
  direction?: 'vertical' | 'horizontal',
  click?: boolean,
  refresh?: boolean,
  onScroll?: Function | null,
  pullUpLoading?: boolean,
  pullDownLoading?: boolean,
  pullUp?: Function | null,
  pullDown?: Function | null,
  bounceTop?: boolean,
  bounceBottom?: boolean
}

ScrollLoadingBarV2.defaultProps = {
  direction: 'vertical',
  click: true,
  refresh: true,
  onScroll: null,
  pullUpLoading: false,
  pullDownLoading: false,
  pullUp: null,
  pullDown: null,
  bounceTop: true,
  bounceBottom: true
}

export default ScrollLoadingBarV2
