
/**
 * 此组件用于图片懒加载，配合 zzy-javascript-devtools -> devtools.lazyImage() 方法使用
 * 必须等待加载目标的 data-src 属性赋值完毕，再执行此方法
 * @param {String} className 赋予的类名
 * @param {String} src 目标地址
 * @param {Function} click 具有点击事件能力
 *
 */
 export default function Img({ className, src, click }) {
  return (
    <img onClick={()=> click && click()} src="" data-src={src?.default || src} alt="" className={className} />
  )
}