"use strict";module.exports=function n(e,t){var i,o=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=n.getBoundingClientRect(),i=t.top,o=t.left,r=t.bottom,l=t.right,c=window,u=c.innerHeight,a=c.innerWidth;return e?(i>0&&i<u||r>0&&r<u)&&(o>0&&o<a||l>0&&l<a):i>=0&&o>=0&&r<=u&&l<=a};(n.bol=!0,"IntersectionObserver"in window)?new IntersectionObserver((function(e){n.bol&&e[0].intersectionRatio&&t()})).observe(e):(i=function(n,e){var t,i,o,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=0,c=function(){l=!1===r.leading?0:(new Date).getTime(),t=null,n.apply(i,o),t||(i=o=null)},u=function(){var u=(new Date).getTime();l||!1!==r.leading||(l=u);var a=e-(u-l);i=this,o=arguments,a<=0||a>e?(t&&(clearTimeout(t),t=null),l=u,n.apply(i,o),t||(i=o=null)):t||!1===r.trailing||(t=setTimeout(c,a))};return u.cancel=function(){clearTimeout(t),l=0,t=null},u}((function(){n.bol&&o(e,!0)&&t()}),100),document.addEventListener("scroll",i));n.closeMonitor=function(){"IntersectionObserver"in window||(i.cancel(),document.removeEventListener("scroll",i))}};
