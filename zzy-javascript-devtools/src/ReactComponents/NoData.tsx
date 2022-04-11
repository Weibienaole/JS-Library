import React, { memo } from 'react'
import styled from 'styled-components'

// import './index.css'
/*
  无数据显示组件
  props:
    say - 文案
    style - 样式 就像给普通标签写样式一样添加style即可
    src - 图片地址
*/

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .noDataPic {
    margin-bottom: 0.88rem;
  }
  .say {
    font-size: 1.75rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #898998;
  }
`

const NoData = (props: Props) => {
  const { style, src, say } = props
  return (
    <Container className="noData-component_zzyDevtools">
      {src && <img
        style={{ ...style }}
        src={src?.default || src}
        alt=""
        className="noDataPic"
      />}
      <span className="say">{say}</span>
    </Container>
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
