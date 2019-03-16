for (i = 0; i <= 15; i++) {
    if (i === 0) {
        console.log(i + " is even.");
        document.getElementById("thing").innerHTML+=(i + " is even." + "<br/>");
    }
    else if (i % 2 === 0) {
        console.log(i + " is even.");
        document.getElementById("thing").innerHTML += (i + " is even." + "<br/>");
    }
    else {
        console.log(i + " is odd.");
        document.getElementById("thing").innerHTML += (i + " is odd." + "<br/>");
    }

}