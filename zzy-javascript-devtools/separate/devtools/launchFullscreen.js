export default function launchFullscreen(el) {
  if (el.requestFullscreen) {
    el.requestFullscreen()
  } else if (el.mozRequestFullScreen) {
    el.mozRequestFullScreen()
  } else if (el.msRequestFullscreen) {
    el.msRequestFullscreen()
  } else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullScreen()
  }
}