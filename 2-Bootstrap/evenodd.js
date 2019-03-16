for (i = 0; i <= 15; i++) {
    if (i === 0) {
        console.log(i + " is even.");
        document.write(i + " is even." + "<br/>");
    }
    else if (i % 2 === 0) {
        console.log(i + " is even.");
        document.write(i + " is even." + "<br/>");
    }
    else {
        console.log(i + " is odd.");
        document.write(i + " is odd." + "<br/>");
    }

}