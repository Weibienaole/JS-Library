import { infinityScrolling } from '../devTools'



// 无限滚动触发块，直接链接触发事件即可
// 需要在触发事件内结束时 赋值 devtools.infinityScrolling.bol = true
/*
  props
    getMoreData Function 加载更多
*/
export default class ScrollLoadingBar extends Component {
  componentDidMount() {
    infinityScrolling(document.querySelector('.scrollLoadingBar'), () => {
      infinityScrolling.bol = false
      this.props.getMoreData()
    })
  }
  componentWillUnmount() {
    infinityScrolling.closeMonitor()
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
