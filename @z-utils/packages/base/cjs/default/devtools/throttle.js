"use strict";module.exports=function(e,n){var l,t,i,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=0,o=function(){a=!1===u.leading?0:(new Date).getTime(),l=null,e.apply(t,i),l||(t=i=null)},r=function(){var r=(new Date).getTime();a||!1!==u.leading||(a=r);var c=n-(r-a);t=this,i=arguments,c<=0||c>n?(l&&(clearTimeout(l),l=null),a=r,e.apply(t,i),l||(t=i=null)):l||!1===u.trailing||(l=setTimeout(o,c))};return r.cancel=function(){clearTimeout(l),a=0,l=null},r};
