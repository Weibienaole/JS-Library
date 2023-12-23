function o(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0&&(window.requestAnimationFrame(o),window.scrollTo(0,e-e/8))}export{o as default};
