function nan(){
    document.getElementById("nan").innerHTML = 0/0;
}

function nanTrue(){
    document.getElementById("nanTrue").innerHTML = isNaN("Hello World");
}

function nanFalse(){
    document.getElementById("nanFalse").innerHTML = isNaN("3498");
}