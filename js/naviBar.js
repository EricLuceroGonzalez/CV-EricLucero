document.getElementById("clickMenu").addEventListener("click", openNav);
document.getElementById("closeMenu").addEventListener("click", closeNav);

function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("navWrapid").classList.add('allNB-clck');
    document.getElementById("topSpan").classList.add('topNB-clck');
    document.getElementById("midSpan").classList.add('middNB-clck');
    document.getElementById("bottSpan").classList.add('bottNB-clck');
    document.getElementById("bara1").classList.add('claseAnim1');
    document.getElementById("bara2").classList.add('claseAnim2');
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("navWrapid").classList.remove('allNB-clck');
    document.getElementById("topSpan").classList.remove('topNB-clck');
    document.getElementById("midSpan").classList.remove('middNB-clck');
    document.getElementById("bottSpan").classList.remove('bottNB-clck');
    document.getElementById("bara1").classList.remove('claseAnim1');
    document.getElementById("bara2").classList.remove('claseAnim2');

}
