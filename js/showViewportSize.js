window.onscroll = function() {
  scrollSurprise()
};

function scrollSurprise() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById('divDesc').classList.remove("floatDIV");
    document.getElementById('dimensions').classList.remove("floatDIV");
    document.getElementById('underConstr').classList.remove("floatDIV");
  } else {
    document.getElementById('divDesc').classList.add("floatDIV");
    document.getElementById('dimensions').classList.add("floatDIV");
    document.getElementById('underConstr').classList.add("floatDIV");
  }
}
