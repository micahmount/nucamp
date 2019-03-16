var myNumber1;
var myNumber2;
var finished = false;

function do_game() {

    while (!finished){
        myNumber1 = prompt("Please enter a random number");
        console.log("myNumber1 = " + myNumber1 + ".");
        myNumber2 = prompt("Excellent! Please enter one more random number");
        console.log("myNumber2 = " + myNumber2 + ".");
        finished = check_numbers();
    }

}

function check_numbers() {
    if(isNaN(myNumber1)) {
        prompt("Oops! that's not a number. \n\n Please enter a number.");
        return false;
    }
    if(isNaN(myNumber2)) {
        alert("Oops! Your 2nd entry is not a number. \n\n Please enter a number.");
        return false;
    }
    if (myNumber1 == myNumber2) {
        alert("Ahhh--you're sneaky--but those are the same number--please pick two different numbers.");
        return false;
    }
    if(myNumber1 > myNumber2) {
        alert("Awesome! " + myNumber1 + " is greater than " + myNumber2 + " !");
        return true;
    }
    else {
        alert("Awesome! " + myNumber2 + " is greater than " + myNumber1 + " !");
        return true;
    }
}