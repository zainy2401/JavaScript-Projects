//Defines the function that is used in the HTML file.
function change(){
    let p = document.getElementById("paragraph"); //Gets the element, via specific ID, from the HTML dom and assigns it in a variable.
    let colour = "#199175"; //Creates and assigns a variable that has a hex code.
    let newText = "The text changed!"; //Creates and assigns a variable with new text.
    newText += " And it got bigger!"; //Concatenates the previous variable with some more text.
    p.style.color = colour, p.style.fontSize = "30px"; //Styles the referenced element.
    p.innerHTML = newText; //Changes the referenced element's content.
}