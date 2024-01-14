document.write(typeof "345"); //Returns the data type of the latter value
document.write("<br><br>");

function posInfinity(){
    document.getElementById("posInfinity").innerHTML = 3E310; //Prints a positive inifnity through floating point
}

function negInfinity(){
    document.getElementById("negInfinity").innerHTML = -3E310; //Prints a negative infinity through floating point
}

function check1(){
    document.getElementById("bool1").innerHTML = 2 > 3; //Compares 2 values resulting in a false
}

function check2(){
    document.getElementById("bool2").innerHTML = 2 < 3; //Compares 2 values resulting in true
}

console.log("Hello World"); //Prints string to console of browser

document.write("10" + 5); //Uses type coercion to display "105" in the browser
document.write("<br><br>");

document.write( 2 == 2); //Compares two values with double equal operators
document.write("<br>");
document.write( 2 == 3); //Compares two values with double equal operators
document.write("<br><br>");

document.write(2 === 2); //Compares two values with triple equal operators
document.write("<br>");
document.write(2 === "pineapples"); //Compares two values with triple equal operators
document.write("<br>");
document.write("2" === 2); //Compares two values with triple equal operators
document.write("<br>");
document.write(2 === 3); //Compares two values with triple equal operators
document.write("<br><br>");

document.write(2 == 2 && 3 == 3); //Compares 2 expressions with AND operator
document.write("<br>");
document.write(2 == 2 && "2" === 2); //Compares 2 expressions with AND operator
document.write("<br><br>");

document.write(2 == 2 || 3 == 2); //Compares 2 expressions with OR operator
document.write("<br>");
document.write(2 == 1 || 2 == 3); //Compares 2 expressions with OR operator
document.write("<br><br>");

document.write(!(2 == 3)); //Uses NOT operator on false expression (double negative)
document.write("<br>");
document.write(!(2 == 2)); //Uses NOT operator on true expression
document.write("<br><br>");