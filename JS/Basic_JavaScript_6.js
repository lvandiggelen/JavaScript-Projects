function Ride_Function() {
    var height, Can_ride;
    height = document.getElementById("height").value;
    Can_ride = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function New_and_This(height, age, weight, hot) {
    this.New_and_This_height = height;
    this.New_and_This_age = age;
    this.New_and_This_weight = weight;
    this.New_and_This_hot = hot;
}
var Jess = new New_and_This("tall", "young", "thin", "hot")
var Erick = new New_and_This("short", "old", "fat", "not hot")
function dafunction(){
    document.getElementById("Keys").innerHTML =
    "Jess is " + Jess.New_and_This_height + ", " + Jess.New_and_This_weight 
    + ", and " + Jess.New_and_This_age + ", and therefore is " + Jess.New_and_This_hot
}

function count_function(){
    document.getElementById("counting").innerHTML = count();
    function count() {
        var starting_point = 9;
        function plus_one() {starting_point += 1;}
        plus_one();
        return starting_point;
    }
}