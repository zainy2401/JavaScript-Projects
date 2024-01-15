var globalString = "Hello This is Global";

function functionOne(){
    var localString1 = "Hello This is Local";
    document.getElementById("scope_test").innerHTML = globalString;
}

function functionTwo(){
    var localString2 = "Hello This is Local";
    document.getElementById("scope_test").innerHTML = localString1;
}


function get_Date(){
    if (new Date().getHours() < 18){
        document.getElementById("greeting").innerHTML = "How are you today?";
    }
}

function age_check(){
    let age = 20;
    if (age >= 18 ){
        document.getElementById("age").innerHTML = "You are old enough";
        return;
    }
    document.getElementById("age").innerHTML = "You are too young";
}

function Age_Function(){
    Age = document.getElementById("Age").value;
    if (Age >= 18){
        Vote = "You are old enough to vote!";
    }
    else{
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("result").innerHTML = Vote;
}


function Time_function(){
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0){
        Reply = "It is morning time!";
    }
    else if(Time > 12 == Time < 18){
        Reply = "It is the afternoon";
    }
    else{
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}