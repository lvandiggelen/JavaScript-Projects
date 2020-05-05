function count_To_Ten() {
    var Digit = "";
    var X=1;
    while (X<11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

function myFunction() {
    var str = "Yoyoyo";
    var n = str.length;
    document.getElementById("demo").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop(){
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments [Y] + "<br>"
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
    }

function cat_pics(){
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + '.';
    }

function constant_function() {
    const Musical_Instrument = {type: "guitar", brand:"Fender", color: "black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var X = 92;
document.write(X);
{
    let X = 33;
    document.write("<br>"+ X);
}
document.write ("<br>" + X);

function myFunction1(name) {
    return "hello "+ name;
}
document.getElementById("name_demo").innerHTML = myFunction1("John");
function break_function() {
    var text = ""
    var i;
    for (i=0; i<5; i++) {
        if (i===3) {
            break;
        }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("breakdemo").innerHTML = text;
}

function continue_function() {
    var text = ""
    var i;
    for (i=0; i<5; i++) {
        if (i===3) {
            continue;
        }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("continuedemo").innerHTML = text;
}