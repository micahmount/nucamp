var a = 0;
var b = 0; 
var c = 0; 

function changeBackground() {
    var x = document.getElementById('bg');
    bg.style.backgroundColor = "rgb(" + a + ", " + b + ", " + c + ")";
    a += 1;
    b += a + 1;
    c += b + 1;
    if (a > 255) a = a - b;
    if (b > 255) b = a;
    if (c > 255) c = b;
    document.getElementById("showRGB").innerHTML ="<h1>" + bg.style.backgroundColor + "</h1>";
}