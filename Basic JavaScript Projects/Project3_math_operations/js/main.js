function addition(){
    document.getElementById("math1").innerHTML = 2+2; //Performs addition
}

function subtraction(){
    document.getElementById("math2").innerHTML = 2-2; //Performs subtraction
}

function multiplication(){
    document.getElementById("math3").innerHTML = 2*2; //Performs multiplication
}

function division(){
    document.getElementById("math4").innerHTML = 2/2; //Performs division
}

function multiple(){
    document.getElementById("math5").innerHTML = (1+2)*10/2 -5; //Performs calculation with multiple operators
}

function modulus(){
    document.getElementById("math6").innerHTML = 25%7; //Performs modulus operation, returning the remainder
}

function negation(){
    var x = 5;
    document.getElementById("math7").innerHTML = -x; //Performs Unary operation that negates the variable
}

function increment(){
    var x = 5;
    document.getElementById("math8").innerHTML = ++x; //Performs incrementation to variable number
}

function decrement(){
    var x = 5;
    document.getElementById("math9").innerHTML = --x; //Performs decrementation to variable number
}

function randomOp(){
    document.getElementById("math10").innerHTML = Math.random()*100; //Generates a random number between 0 and 100
}