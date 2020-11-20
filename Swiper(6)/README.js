import Swiper from 'swiper'
import '../../static/swiper.min.css'

// react -- HOOK
//   class声明的话componentWillMount内new使用
// 切记具有swiper组件的页面不允许使用 懒加载等延迟加载--router.lazy 或者是提前生成，必须等dom生成之后再new 否则无法使用
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
  return () => {}
}, [swiperEl])

function SwiperDom() {
  return (
    <div className="swiper-container swiper-no-swiping" ref={swiperEl}>
      <div className="swiper-wrapper">
        <div className="swiper-slide">slider1</div>
        <div className="swiper-slide">slider2</div>
        <div className="swiper-slide">slider3</div>
      </div>
    </div>
  )
}
