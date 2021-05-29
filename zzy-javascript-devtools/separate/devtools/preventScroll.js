export default function preventScroll(scrollNum) {
  // 存储当前滚动位置
  scrollNum = window.scrollY;

  // 将可滚动区域固定定位，可滚动区域高度为 0 后就不能滚动了
  document.body.style["overflow-y"] = "hidden";
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
  document.body.style.top = -scrollNum + "px";
  // document.body.style['overscroll-behavior'] = 'none'
}