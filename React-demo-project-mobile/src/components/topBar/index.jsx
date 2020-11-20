import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './index.css'
class TopBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="topBar-component">
        <img
          src={require('./image/backArrow.png')}
          alt=""
          className="arrow"
          onClick={() => this.props.history.goBack(-1)}
        />
        <span className="topBarTil">{this.props.title}</span>
      </div>
    )
  }
}

export default withRouter(TopBar)
