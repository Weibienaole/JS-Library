

import './index.css'
/*
  顶部栏(kl标准)
  props:
    type
      0 - 黑色主题
      1 - 白色
      不传  默认为白色主题，背景为空(透明)
    noArrow
      true - 隐藏箭头
      false - 显示
    arrowBack 返回事件
    title  标题
    rigTxt 右侧文字 不传则隐藏
    clickRigTxt 右侧点击事件
*/
export default class TopBar extends Component {
  render() {
    let arrowSvg = require(`${
      this.props.type == '0'
        ? './image/backArrow_black.svg'
        : './image/backArrow.svg'
    }`)
    return (
      <div
        className="topBar-component_zzyDevtools"
        style={{
          background:
            this.props.type == 0
              ? '#fff'
              : this.props.type == 1
              ? '#000'
              : 'none'
        }}
      >
        {!this.props.noArrow && (
          <img
            src={arrowSvg.default || arrowSvg}
            alt=""
            className="arrow"
            onClick={() => this.props.arrowBack()}
          />
        )}
        <span
          className="topBarTil"
          style={{ color: this.props.type == '0' ? '#000' : '#fff' }}
        >
          {this.props.title}
        </span>
        {this.props.rigTxt && (
          <span
            className="rigTxt"
            style={{ color: this.props.type == '0' ? '#000' : '#fff' }}
            onClick={() => this.props.clickRigTxt()}
          >
            {this.props.rigTxt}
          </span>
        )}
      </div>
    )
  }
}