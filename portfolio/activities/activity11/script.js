function function1() {
    const num = parseInt(document.getElementById("forNum").value);
    const text = document.getElementById("forText").value;
 
    if (isNaN(num) || text === "") {
        document.getElementById("forOutput").innerHTML = "Please enter valid input.";
        return;
    }
 
    let result = "";
 
    for (let i = 1; i <= num; i++) {
        result += i + ". " + text + "<br>";
    }
    document.getElementById("forOutput").innerHTML = result;
}
 
function function2() {
    document.getElementById("forOutput").innerHTML = "";
}
 
function function3() {
    const num = parseInt(document.getElementById("whileNum").value);
    const text = document.getElementById("whileText").value;
 
    if (isNaN(num) || text === "") {
        document.getElementById("whileOutput").innerHTML = "Please enter valid input.";
        return;
    }
    let result = "";
    let i = 1;
 
    while (i <= num) {
        result += i + ". " + text + "<br>";
        i++;
    }
    document.getElementById("whileOutput").innerHTML = result;
}
 
function function4() {
    document.getElementById("whileOutput").innerHTML = "";
}
 
function function5() {
    const num = parseInt(document.getElementById("doNum").value);
    const text = document.getElementById("doText").value;
 
    if (isNaN(num) || text === "") {
        document.getElementById("doOutput").innerHTML = "Please enter valid input.";
        return;
    }
 
    let result = "";
    let i = 1;
 
    do {
        result += i + ". " + text + "<br>";
        i++;
    } while (i <= num);
    document.getElementById("doOutput").innerHTML = result;
}
 
 
function function6() {
    document.getElementById("doOutput").innerHTML = "";
}