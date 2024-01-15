function rideFunction(){
    let height, canRide;
    height = document.getElementById("height").value; //Recieves the value in the html input box
    canRide = (height < 52) ? "You are too short" : "You are tall enough"; //Uses ternary operator to assign appropriate value depending on condition
    document.getElementById("ride").innerHTML = canRide + " to ride.";
}

//This function below acts as a constructor which allows a value to be entered when instantiating an object.
function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.vehicle_Color = Color;
}

var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red"); //Creates an instance from the vehicle constructor
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black"); //Creates an instance from the vehicle constructor
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard"); //Creates an instance from the vehicle constructor
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year; //Prints a concatenated sentence that utilizes a specific object and its property
}

// Below is a nested function, in total there are 3, all within each other
function count_function(){
    document.getElementById("nested_function").innerHTML = Count();
    function Count(){
        var starting_point = 9;
        function plus_one(){starting_point += 1;}
        plus_one();
        return starting_point;
    }
}