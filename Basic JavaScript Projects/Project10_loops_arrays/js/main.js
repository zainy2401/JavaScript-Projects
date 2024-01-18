function lengthCheck(){
    let x = document.getElementById("text").innerHTML.length; //Uses the length method to return the length of the string.
    document.getElementById("text").innerHTML = "The sentence was " + x + " characters long.";
}

function loopTest(){
    let instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"] //Creates an array with several strings.
    let content = "";
    let y;
    for(y = 0; y < instruments.length; y++){ //Initiates a for loop that runs for the lengthof the array which is 7 times.
        content += instruments[y] + "<br>"; //Concatenates the item from the array chosen depending on the index which is determined by which iteration it is of the loop into a string variable.
    }
    document.getElementById("list-instruments").innerHTML = content;
}

function favColors(){
    let output = "";
    let colors = ["Red", "Green", "Blue", "Purple"];
    for(let x = 0; x < colors.length; x++){
        output += colors[x] + "<br>";
    }
    document.getElementById("colors").innerHTML = output;
}

function constant_function(){
    const instrument = {type: "flute", brand: "unknown", color: "white"}; //Creates an object as a constant, so it can't be changed.
    instrument.color = "black"; //Changes one of the properties of the object.
    instrument.price = "£40"; //Adds a new property with a value to the object.
    document.getElementById("constant").innerHTML = "The " + instrument.color + " " + instrument.brand + " " + instrument.type + " costs " + instrument.price;
}

var x = 82;
alert(x);
{
    let x = 33;
    alert(x);
}
alert(x);

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function(){
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
function getObject(){
    document.getElementById("car_object").innerHTML = car.description();
}