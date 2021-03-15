import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './index.css'

/*
  props:
    type
      0 - 黑色主题
      1 - 白色
    title  标题
*/
class TopBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="topBar-component">
        <img
          src={require(`${this.props.type === '0' ? './image/backArrow_black.png' : './image/backArrow.png'}`)}
          alt=""
          className="arrow"
          onClick={() => this.props.history.goBack(-1)}
        />
        <span className="topBarTil" style={{color: this.props.type === '0' ? '#000' : '#fff'}}>{this.props.title}</span>
      </div>
    )
  }
}

export default withRouter(TopBar)
