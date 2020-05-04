var X = 10;
function Add_em_1() {
    document.write(20 + X + "<br>");
}
function Add_em_2() {
    document.write(X + 100);
}
Add_em_1;
Add_em_2;

function get_date() {
    if (new Date().getHours()<18){
        document.getElementById("greeting").innerHTML = "How are you today?";
    }
}

function age_function() {
    age = document.getElementById("age").value;
    if (age>=18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote.";
    }
    document.getElementById("how_old_are_you?").innerHTML = Vote;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}