import React, { Component, useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import './index.css'
function Header(props) {
  return (
    <div className="header-wrap">
      <div className="topBar">
        <div className="container_box container">
         {props.children}
        </div>
      </div>
      <div className="headBar">
        <div className="container_box container"></div>
      </div>
    </div>
  )
}

export default withRouter(Header)
