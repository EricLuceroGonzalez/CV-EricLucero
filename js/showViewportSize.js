window.onresize = displayWindowSize;
window.onload = displayWindowSize;

function displayWindowSize() {
    // your size calculation code here
    var myWidth = window.innerWidth;
    var myHeight = window.innerHeight;
    document.getElementById("dimensions").innerHTML = myWidth + "x" + myHeight;
};

window.addEventListener('load', function () { // on page load
var dime = document.getElementById("dimensions");
    dime.addEventListener('touchstart', function (e) {
        dime.textContent = 'sdssds';
    }, false)

}, false);
