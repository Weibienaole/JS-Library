/*
<--README
<n:scrollToTop>
<d:平滑滚动至顶部>
<d:该代码段可用于平滑滚动到当前页面的顶部。>
README-->
*/
// 平滑滚动至顶部 --> 该代码段可用于平滑滚动到当前页面的顶部。
function scrollToTop(): void {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 8)
  }
}

export default scrollToTop
