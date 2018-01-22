window.addEventListener('load', function(){
 
    var dimPara = document.getElementById('dimensions');
 
    dimPara.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0] // reference first touch point (ie: first finger)
        dimPara.style.backgroundColor = 'black';
        e.preventDefault()
    }, false)
 
    dimPara.addEventListener('touchmove', function(e){
        var touchobj = e.changedTouches[0] // reference first touch point for this event
        var dist = parseInt(touchobj.clientX) - startx
        dimPara.style.backgroundColor = 'blue';
        e.preventDefault()
    }, false)
 
    dimPara.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0] // reference first touch point for this event
        dimPara.style.backgroundColor = 'yellow';
        e.preventDefault()
    }, false)
 
}, false)