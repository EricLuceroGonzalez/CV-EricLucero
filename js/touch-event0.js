window.addEventListener('load', function(){
 
    var dimPara = document.getElementById('dimensions');
 
    dimPara.addEventListener('touchstart', function(e){
        dimPara.style.backgroundColor = 'rgba(17, 212, 150, 0.1)';
        e.preventDefault()
    }, false)
 
    dimPara.addEventListener('touchmove', function(e){
        var dist = parseInt(touchobj.clientX) - startx
        dimPara.style.backgroundColor = 'blue';
        e.preventDefault()
    }, false)
 
    dimPara.addEventListener('touchend', function(e){
        dimPara.style.backgroundColor = 'rgba(17, 212, 150, 0.9)';
        e.preventDefault()
    }, false)
 
}, false)

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
} 