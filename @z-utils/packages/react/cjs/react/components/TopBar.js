"use strict";var e=require("@babel/runtime/helpers/defineProperty"),t=require("react/jsx-runtime"),r=require("react");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?i(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var n={"topBar-component_zzyDevtools":{width:"100vw",height:"5.5rem",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},arrow:{position:"absolute",left:"0",top:"0",width:"5.5rem",height:"5.5rem",transform:"rotate(-90deg)"},topBarTil:{fontSize:"2.25rem",fontFamily:"PingFangSC-Medium, PingFang SC",fontWeight:500},rigTxt:{position:"absolute",right:"3rem",fontSize:"1.75rem"}},c=function(e){var r=e.type,i=void 0===r?null:r,c=e.noArrow,a=e.title,j=e.rigTxt,l=e.clickRigTxt,M=e.arrowBack,s=0==i?"data:image/svg+xml;base64,PHN2ZyB0PSIxNjQ5MjExODM4NjU3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY3NDciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHBhdGggZD0iTTUwMC44IDQ2MS45MDkzMzNMMjY3LjMwNjY2NyA2OTUuMjk2bC00NS4yMjY2NjctNDUuMjY5MzMzIDI3OC43NDEzMzMtMjc4LjYxMzMzNEw3NzkuMzA2NjY3IDY1MC4wMjY2NjdsLTQ1LjI0OCA0NS4yMjY2NjZ6IiBwLWlkPSI2NzQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+":"\ndata:image/svg+xml;base64,PHN2ZyB0PSIxNjQ5MjExODM4NjU3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY3NDciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHBhdGggZD0iTTUwMC44IDQ2MS45MDkzMzNMMjY3LjMwNjY2NyA2OTUuMjk2bC00NS4yMjY2NjctNDUuMjY5MzMzIDI3OC43NDEzMzMtMjc4LjYxMzMzNEw3NzkuMzA2NjY3IDY1MC4wMjY2NjdsLTQ1LjI0OCA0NS4yMjY2NjZ6IiBwLWlkPSI2NzQ4IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+\n";return t.jsxs("div",{className:"topBar-component_zzyDevtools",style:o({background:0==i?"#fff":1==i?"#000":"none"},n["topBar-component_zzyDevtools"]),children:[!c&&t.jsx("img",{src:s,alt:"",className:"arrow",onClick:function(){return M&&M()},style:n.arrow}),t.jsx("span",{className:"topBarTil",style:o({color:"0"==i?"#000":"#fff"},n.topBarTil),children:a}),j&&t.jsx("span",{className:"rigTxt",onClick:function(){return l&&l()},style:o({color:"0"==i?"#000":"#fff"},n.rigTxt),children:j})]})};c.defaultProps={type:null,noArrow:!1,title:"",rigTxt:"",clickRigTxt:null,arrowBack:null};var a=r.memo(c);module.exports=a;
