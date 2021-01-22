import React, { Component } from 'react'

/*
  props
    moreDataBol Boolean  商品列表后得知还有没有更多的数据 有 true 无 false
    getMoreDataList  Function  返回Boolean 是否加载更多


    moreDataBol处理方式
      只允许在页面初始化数据获取成功后首次下拉底部才可以触发方法，获取更多的数据
      下拉方法触发之后，设置moreDataBol为false 只有在请求结果出现之后才可以再次修改moreDataBol  成功(根据isMore处理,或者当前页length为0) 失败(设置为false,将不再触发此方法)
*/

class ScrollLoadingBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commondityLoadingBol: false // 商品下滑加载时 true  组件
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scroll)
  }
  scroll = () => {
    let that = this
    let scrollBottom = Math.floor(
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop -
        document.documentElement.clientHeight
    )
    if (scrollBottom < 50) {
      if (this.state.commondityLoadingBol) return
      if (this.props.moreDataBol === false) return
      this.setState({
        commondityLoadingBol: true
      })
      this.props.getMoreDataList()
      let timer = window.setTimeout(() => {
        window.clearTimeout(timer)
        that.setState({
          commondityLoadingBol: false
        })
      }, 100)
    }
  }
  // 组件卸载的时候处理
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll)
    this.setState({
      commondityLoadingBol: false // 商品下滑加载时 true  组件
    })
  }
  render() {
    return <>{this.props.children}</>
  }
}
export default ScrollLoadingBox
