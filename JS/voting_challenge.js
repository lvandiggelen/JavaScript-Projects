function vote_function() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age > 17) ? "You are old enough to vote.": "You are too young to vote."
    document.getElementById("vote").innerHTML = can_vote;
}

function vehicle(make, model, year, color) {
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}
var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "trail hawk", 2019, "white and black");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.vehicle_color + "-colored " + Erik.vehicle_model + " manufactured in " +Erik.vehicle_year;
}