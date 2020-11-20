import React, { Component, useState, useEffect, useRef } from 'react'
import { withRouter, Link, Route } from 'react-router-dom'
import Swiper from 'swiper'

import Header from '@/components/header'
import Footer from '@/components/footer'
import './index.css'
import '../../static/swiper.min.css'


function Layout(props) {
  const swiperEl = useRef(null)
  const [swiper, setSwiper] = useState(null)
  useEffect(() => {
    if (swiperEl !== null) {
      setSwiper(
        new Swiper('.swiper-container', {
          autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          loop: true,
          direction: 'vertical',
        })
      )
    }
    return () => {
    }
  }, [swiperEl])
  return (
    <div className="layout-wrap">
      <Header>
        <div className="swiper-container swiper-no-swiping" ref={swiperEl}>
          <div className="swiper-wrapper">
            <div className="swiper-slide">slider1</div>
            <div className="swiper-slide">slider2</div>
            <div className="swiper-slide">slider3</div>
          </div>
        </div>
      </Header>
      <div className="container">
        layout
        {props.children}
      </div>
      <Footer></Footer>
    </div>
  )
}
// class Ass extends Component {
//   constructor(props){
//     super(props)
//     this.state = {

//     }
//   }
//   componentDidMount() {
//     console.log(123)
//     new Swiper('.swiper-container', {
//       loop: true
//     })
//   }
//   componentWillMount() {
//     console.log(456)
//   }
//   render() {
//     return (
//       <div className="layout-wrap">
//         <Header>
//           <div className="swiper-container">
//             <div className="swiper-wrapper">
//               <div className="swiper-slide">slider1</div>
//               <div className="swiper-slide">slider2</div>
//               <div className="swiper-slide">slider3</div>
//             </div>
//           </div>
//         </Header>
//         <div className="container">
//           layout
//           {this.props.children}
//         </div>
//         <Footer></Footer>
//       </div>
//     )
//   }
// }
export default withRouter(Layout)
