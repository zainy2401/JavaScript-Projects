function check(){
    let age = document.getElementById("age").value;
    let canVote = (age >= 18) ? "You can vote" : "You can't vote yet";
    document.getElementById("result").innerHTML = canVote;
}