//Below creates a js dictionary with key value pairs, including an array as a value!
let person = {
    name: "Zain",
    age: 22,
    city: "Edinburgh",
    classes: ["History","Math","Computer Science","Physics"],
    graduated: false
};

delete person.city; //Deletes the "city" kvp in the person dictionary

//Function that outputs a specific class from the array
function revealClass(){
    document.getElementById("dictionary").innerHTML = person.classes[2];
}

//Function that outputs the city value in the dictionary, however it has been deleted so it will not display correctly
function revealCity(){
    document.getElementById("dictionary2").innerHTML = person.city;
}