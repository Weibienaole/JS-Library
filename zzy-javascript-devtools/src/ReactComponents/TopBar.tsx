import React, { memo } from 'react'
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
    height: '5.5rem',
    transform: 'rotate(-90deg)'
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
    <div
      className="topBar-component_zzyDevtools"
      style={{
        background:
          type == 0
            ? '#fff'
            : type == 1
              ? '#000'
              : 'none',
        ...(classObj as React.CSSProperties)['topBar-component_zzyDevtools']
      }}
    >
      {!noArrow && (
        <img
          src={arrowSvg}
          alt=""
          className="arrow"
          onClick={() => arrowBack && arrowBack()}
          style={(classObj as React.CSSProperties)['arrow']}
        />
      )}
      <span
        className="topBarTil"
        style={{
          color: type == '0' ? '#000' : '#fff',
          ...classObj['topBarTil']
        }}
      >{title}</span>
      {rigTxt && (
        <span
          className="rigTxt"
          onClick={() => clickRigTxt && clickRigTxt()}
          style={{
            color: type == '0' ? '#000' : '#fff',
            ...(classObj as React.CSSProperties)['rigTxt']
          }}
        >
          {rigTxt}
        </span>
      )}
    </div>
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
