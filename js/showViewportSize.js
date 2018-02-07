window.onscroll = function() {
  scrollSurprise()
};

function scrollSurprise() {
  var a = document.body.scrollTop;
  var b= document.documentElement.scrollTop;
  if (a > 550 ||  b > 550) {
    document.getElementById('divChatMe').style.opacity = "1";
    document.getElementById('dimensions').style.opacity = "1";
    document.getElementById('underConstr').style.opacity = "1";
    document.getElementById('divChatMe').classList.add("floatDivShow");
    document.getElementById('dimensions').classList.add("floatDivShow");
    document.getElementById('underConstr').classList.add("floatDivShow");
    document.getElementById('divChatMe').classList.remove("floatDiv-Hide");
    document.getElementById('dimensions').classList.remove("floatDiv-Hide");
    document.getElementById('underConstr').classList.remove("floatDiv-Hide");
    document.getElementById('svg-IDframe2').classList.add("svg-frame2");
    document.getElementById('svg-IDframe3').classList.add("svg-frame3");
  } else {
    document.getElementById('divChatMe').classList.remove("floatDivShow");
    document.getElementById('dimensions').classList.remove("floatDivShow");
    document.getElementById('underConstr').classList.remove("floatDivShow");
    document.getElementById('divChatMe').classList.add("floatDiv-Hide");
    document.getElementById('dimensions').classList.add("floatDiv-Hide");
    document.getElementById('underConstr').classList.add("floatDiv-Hide");
    document.getElementById('svg-IDframe2').classList.remove("svg-frame2");
    document.getElementById('svg-IDframe3').classList.remove("svg-frame3");
  }
  // if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
  //   document.getElementById('downArrow').classList.add("floatDiv-Hide");
  // } else {
  //   document.getElementById('downArrow').classList.remove("floatDiv-Hide");
  // }
}
