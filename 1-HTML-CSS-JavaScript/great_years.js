var years=[2014, 2015, 2016, 2017, 2018];
var response, list, count=0;
    list = "<ul>";
    for ( var great_year of years) {
        response = confirm(great_year + " was great for you?");
        if (!response) continue;
            (great_year), count++;
            list += "<li>" + great_year + "</li>";
    }
    list += "</ul>";
    alert("Your great years were: " + list + ".");