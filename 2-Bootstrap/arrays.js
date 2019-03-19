var myArray = ["Red", "Green", "White", "Black"];
var myString = " ";
for (i = 0; i <= myArray.length; i++) {
    myString += myArray[i] + ", "; //https://stackoverflow.com/questions/39584129/concatenate-string-through-for-loop
    console.log(myString);
    //console.log(myArray.join(", "));
    //console.log(myArray.join("+"));
}