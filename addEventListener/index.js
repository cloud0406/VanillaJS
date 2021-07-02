

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

// html파일의 h2 태그에 접근
const title = document.querySelector("h2");


const superEventHandler = {
  //마우스 올리면 작동
  mouseenter: function mouseenterHandler() {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },

  //마우스 안올릴때 작동
  mouseleave: function mouseleaveHandler() {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },

  //브라우저 크기 조절할때 작동
  resize: function resizeHandler() {
    title.innerText = "You just resized!";
    title.style.color = colors[2];
  },

  //마우스 우클릭시 작동
  contextmenu: function contextmenuHandler() {
    title.innerText = "That was right clicked!";
    title.style.color = colors[3];
  }
};

// h2 태그에서 작동
title.addEventListener("mouseenter", superEventHandler.mouseenter);
title.addEventListener("mouseleave", superEventHandler.mouseleave);

//윈도우(브라우저) 에서 작동
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.contextmenu);
