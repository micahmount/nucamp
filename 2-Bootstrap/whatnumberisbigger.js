do {
    var num1 = (prompt("Give me a number!"));
    if (isNaN(num1)) {
        alert("Oops! " + num1 + " is not a number!");
    }
} while (isNaN(num1))

do {
    var num2 = (prompt("Great, gimme another one!"));
    if (isNaN(num2)) {
        alert("Oh-no! " + num2 + " is not a number!");
    }
} while (isNaN(num2))

if (num1 > num2) {
    alert(num1 + " is bigger!");
}
else if (num2 > num1) {
    alert(num2 + " is bigger!");
}
else {
    alert("Uh-oh! " + num1 + " is the same as " + num2 + "!");
}