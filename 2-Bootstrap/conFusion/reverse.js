// Found this tutorial on how to do this: https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb
function reverseString(str) {
    let newString = "";
    for (let i= str.length -1; i >=0; i--) {
        newString += str[i];
    }
    return newString;
}

reverseString("hello");