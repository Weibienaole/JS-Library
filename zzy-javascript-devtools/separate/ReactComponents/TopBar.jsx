import React, { Component } from 'react'
import image1 from './image/backArrow_black.svg'
import image2 from './image/backArrow.svg'
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

const classObj = {
  'topBar-component_zzyDevtools': {
    width: '100vw',
    height: '5.5rem',
    display: 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    position: 'relative'
  },
  arrow: {
    position: 'absolute',
    left: '0',
    top: '0',
    width: '5.5rem',
    height: '5.5rem'
  },
  topBarTil: {
    'fontSize': '2.25rem',
    'fontFamily': 'PingFangSC-Medium, PingFang SC',
    'fontWeight': 500
  },
  rigTxt: {
    position: 'absolute',
    right: '3rem',
    'fontSize': '1.75rem'
  }
}
export default class TopBar extends Component {
  render() {
    let arrowSvg = this.props.type == '0' ? image1 : image2
    return (
      <div
        className="topBar-component_zzyDevtools"
        style={{
          background:
            this.props.type == 0
              ? '#fff'
              : this.props.type == 1
              ? '#000'
              : 'none',
          ...classObj['topBar-component_zzyDevtools']
        }}
      >
        {!this.props.noArrow && (
          <img
            src={arrowSvg?.default || arrowSvg}
            alt=""
            className="arrow"
            onClick={() => this.props.arrowBack()}
            style={classObj['arrow']}
          />
        )}
        <span
          className="topBarTil"
          style={{
            color: this.props.type == '0' ? '#000' : '#fff',
            ...classObj['topBarTil']
          }}
        >
          {this.props.title}
        </span>
        {this.props.rigTxt && (
          <span
            className="rigTxt"
            style={{
              color: this.props.type == '0' ? '#000' : '#fff',
              ...classObj['rigTxt']
            }}
            onClick={() => this.props.clickRigTxt()}
          >
            {this.props.rigTxt}
          </span>
        )}
      </div>
    )
  }
}
