import React, { Component } from 'react'

// import './index.css'
/*
  无数据显示组件
  props:
    say - 文案
    style - 样式 就像给普通标签写样式一样添加style即可
    src - 图片地址
*/

const classObj = {
  'noData-component_zzyDevtools': {
    width: '100%',
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center'
  },
  noDataPic: {
    'margin-bottom': '0.88rem'
  },
  say: {
    'font-size': '1.75rem',
    'font-family': 'PingFangSC-Regular, PingFang SC',
    'font-weight': 400,
    color: '#898998'
  }
}

export default class NoData extends Component {
  render() {
    return (
      <div
        className="noData-component_zzyDevtools"
        style={classObj['noData-component_zzyDevtools']}
      >
        <img
          style={{...classObj['noDataPic'], ...this.props.style}}
          src={this.props.src.default || this.props.src}
          alt=""
          className="noDataPic"
        />
        <span className="say" style={classObj['say']}>
          {this.props.say}
        </span>
      </div>
    )
  }
}
