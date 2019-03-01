let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    console.log(window.pageYOffset)
    let currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
        //document.getElementById("mainNav").style.top = "0";
        // document.getElementById("mainNav").style.backgroundColor = "white"

    } else {
        //document.getElementById("mainNav").style.top = "-60px";
        //document.getElementById("mainNav").style.backgroundColor = "teal"
    }
    prevScrollpos = currentScrollPos;
}