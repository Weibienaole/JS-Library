import React, { memo } from 'react'

// import './index.css'
/*
  无数据显示组件
  props:
    say - 文案
    style - 样式 就像给普通标签写样式一样添加style即可
    src - 图片地址
*/

const style1 = {
  width: '100%',
  display: 'flex',
  'flex-direction': 'column',
  alignItems: 'center',
}
const style2 = {
  marginBottom: '0.88rem'
}
const style3 = {
  fontSize: '1.75rem',
  fontFamily: 'PingFangSC-Regular, PingFang SC',
  fontWeight: 400,
  color: '#898998',
}

const NoData = (props: Props) => {
  const { style, src, say } = props
  return (
    <div style={style1} className="noData-component_zzyDevtools">
      {src && <img
        style={{ ...style2, ...style }}
        src={src?.default || src}
        alt=""
        className="noDataPic"
      />}
      <span className="say" style={style3}>{say}</span>
    </div>
  )
}

interface Props {
  say: string,
  src: any,
  style: { [key: string]: string }
}

NoData.defaultProps = {
  style: {},
  src: null,
  say: ''
}


export default memo(NoData)
