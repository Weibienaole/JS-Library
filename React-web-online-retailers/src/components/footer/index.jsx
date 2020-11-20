import React, { Component, useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import './index.css'
function Footer(props) {
  return (
    <div className="footer-wrap">
      <div className="topBar">
        <div>
          <div className="footer">
            footer
            {/* {props.children} */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default withRouter(Footer)
