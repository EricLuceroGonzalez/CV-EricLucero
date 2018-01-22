window.onresize = displayWindowSize;
window.onload = displayWindowSize;

function displayWindowSize() {
    // your size calculation code here
    var myWidth = window.innerWidth;
    var myHeight = window.innerHeight;
    document.getElementById("dimensions").innerHTML = myWidth + "x" + myHeight;
};

window.addEventListener('load', function(){ // on page load
 
    document.getElementById("dimensions").addEventListener('touchstart', function(e){
        alert(e.changedTouches[0].pageX) // alert pageX coordinate of touch point
    }, false)
 
}, false)