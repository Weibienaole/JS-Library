

import './index.css'
/*
  无数据显示组件
  props:
    say - 文案
    style - 样式 就像给普通标签写样式一样添加style即可
    src - 图片地址
*/
export default class NoData extends Component {
  render() {
    return (
      <div className="noData-component_zzyDevtools">
        <img
          style={this.props.style}
          src={this.props.src.default || this.props.src}
          alt=""
          className="noDataPic"
        />
        <span className="say">{this.props.say}</span>
      </div>
    )
  }
}