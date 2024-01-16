function transform(){
    let message = document.getElementById("transform").innerHTML;
    message = message.toUpperCase();
    document.getElementById("transform").innerHTML = message;
}

function search(){
    let text = document.getElementById("sampleText").innerHTML;
    let position = text.search("Blue");
    document.getElementById("result").innerHTML = "The position of the word \"Blue\" is at index of " + position;
}