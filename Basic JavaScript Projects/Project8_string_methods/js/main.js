function concatString(){
    let partOne = "Hello ";
    let partTwo = "my name ";
    let partThree = "is Zain.";
    let completeString = partOne.concat(partTwo, partThree); //Uses the concat() method to string together all variables.
    document.getElementById("concat").innerHTML = completeString;
}

function sliceString(){
    const sentence = document.getElementById("slice").innerHTML;
    let section = sentence.slice(45, 56); //Takes a section of the string defined with starting and ending index points.
    document.getElementById("slice").innerHTML = section;
}

function turnToString(){
    let num = 187;
    num = num.toString(); //Converts the integer variable to string.
    document.getElementById("numToString").innerHTML = num + typeof num; //Output said string with typeof keyword to prove its a string.
}

function percision(){
    const x = 534.34958;
    document.getElementById("sampleText").innerHTML = x.toPrecision(5); //Utlizes the toPercision() method to output number to 5 decimal places, but also as a string.
}