var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);

        }
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // // INJECT CSS
        // var css = document.createElement("style");
        // css.type = "text/css";
        // css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        // document.body.appendChild(css);
    };

    var counter = 0;

// A single iteration of your calculation function
// log the current value of counter as an example
// then wait before doing the next iteration
function printCounter() {

console.log(counter);
counter++;
if (counter < 300)
var randiTop  = Math.random() * 230;
var randiLeft = Math.random() * window.innerWidth;
var randiTopString  = randiTop.toString();
var randiLeftString = randiLeft.toString();
var test = document.getElementById('testing');
document.getElementById('typewrt').style.top  = randiTopString;
document.getElementById('typewrt').style.left = randiLeftString;
test.textContent = randiTopString + ' x '+ randiLeftString;
setTimeout(printCounter, 3000);
}
 printCounter();
