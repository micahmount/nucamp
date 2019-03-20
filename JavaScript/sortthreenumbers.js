var x = parseInt(prompt("Let's play a game! \n\n Give me a number!"));
console.log("x = " + x + " .");
var y = parseInt(prompt("How about a 2nd number?"));
console.log("y = " + y + " .");
var z = parseInt(prompt("Awesome! Now the 3rd number."));
console.log("z = " + z + " .");

if (x > y && x > z) {
    console.log("Awesome x is greater than both y & z!");
    if (y > z) {
        alert("Awesome " + x + ", " + y + ", " + z + "!");
    } else {
        alert("Awesome " + x + ", " + z + ", " + y + "!");
    }
} else if (y > x && y > z) {
    console.log("Whoa! y is larger than x & z.");
    if (x > z) {
        alert("Awesome " + y + ", " + x + ", " + z + "!");
    } else {
        alert("Awesome " + y + ", " + z + ", " + x + "!");
    }
} else if (z > x && z > y) {
    console.log("Yeah, buddy! Z rules them all!");
    if (x > y) {
    alert("Awesome " + z + ", " + x + ", " + y + "!");
    } else {
        alert("Awesome " + z + ", " + y + ", " + x + "!");
    }
} else if (x == y && x == z) {
    alert("Tricky! all of your entries were equal!");
}