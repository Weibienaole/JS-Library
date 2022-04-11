import React, { memo } from 'react'
import styled from 'styled-components'
const imageBlack = `data:image/svg+xml;base64,PHN2ZyB0PSIxNjQ5MjExODM4NjU3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY3NDciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHBhdGggZD0iTTUwMC44IDQ2MS45MDkzMzNMMjY3LjMwNjY2NyA2OTUuMjk2bC00NS4yMjY2NjctNDUuMjY5MzMzIDI3OC43NDEzMzMtMjc4LjYxMzMzNEw3NzkuMzA2NjY3IDY1MC4wMjY2NjdsLTQ1LjI0OCA0NS4yMjY2NjZ6IiBwLWlkPSI2NzQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+`

const imageWhite = `
data:image/svg+xml;base64,PHN2ZyB0PSIxNjQ5MjExODM4NjU3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY3NDciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHBhdGggZD0iTTUwMC44IDQ2MS45MDkzMzNMMjY3LjMwNjY2NyA2OTUuMjk2bC00NS4yMjY2NjctNDUuMjY5MzMzIDI3OC43NDEzMzMtMjc4LjYxMzMzNEw3NzkuMzA2NjY3IDY1MC4wMjY2NjdsLTQ1LjI0OCA0NS4yMjY2NjZ6IiBwLWlkPSI2NzQ4IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+
`

/*
  顶部栏
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

const Container = styled.div`
  width: 100vw;
  height: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${(props: { type: number | string | null }) =>
    props.type == 0 ? '#fff' : props.type == 1 ? '#000' : 'none'};
  .arrow {
    position: absolute;
    left: 0;
    top: 0;
    width: 4.5rem;
    height: 5.5rem;
    transform: rotate(-90deg);
  }
  .topBarTil {
    font-size: 2.25rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: ${(props) => (props.type === 0 ? '#000' : '#fff')};
  }
  .rigTxt {
    position: absolute;
    right: 3rem;
    font-size: 1.75rem;
    color: ${(props) => (props.type === 0 ? '#000' : '#fff')};
  }
  .svg {
    position: fixed;
    top: -100000px;
    left: -100000px;
    opacity: 0;
  }
`

const TopBar = (props: Props) => {
  const {
    type = null,
    noArrow,
    title,
    rigTxt,
    clickRigTxt,
    arrowBack
  } = props
  let arrowSvg = type == 0 ? imageBlack : imageWhite
  return (
    <Container type={type} className="topBar-component_zzyDevtools">
      {!noArrow && (
        <img
          src={arrowSvg}
          alt=""
          className="arrow"
          onClick={() => arrowBack && arrowBack()}
        />
      )}
      <span className="topBarTil">{title}</span>
      {rigTxt && (
        <span className="rigTxt" onClick={() => clickRigTxt && clickRigTxt()}>
          {rigTxt}
        </span>
      )}
    </Container>
  )
}

interface Props {
  type?: string | number | null,
  noArrow?: boolean,
  title?: string,
  rigTxt?: string,
  clickRigTxt?: Function | null,
  arrowBack?: Function | null
}

TopBar.defaultProps = {
  type: null,
  noArrow: false,
  title: '',
  rigTxt: '',
  clickRigTxt: null,
  arrowBack: null
}

export default memo(TopBar)
