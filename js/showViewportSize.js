window.onresize = displayWindowSize;
window.onload = displayWindowSize;

function displayWindowSize() {
    // your size calculation code here
    var myWidth = window.innerWidth;
    var myHeight = window.innerHeight;
    document.getElementById("dimensions").innerHTML = myWidth + "x" + myHeight;
};
