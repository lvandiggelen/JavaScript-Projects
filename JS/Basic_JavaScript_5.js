document.write (typeof 5)

function my_Function() {
    document.getElementById("Test").innerHTML = isNaN('String');
}
function my_Function1() {
    document.getElementById("Test1").innerHTML= 0/0;
}

function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN('007');
}
document.write(2E400);
document.write(-2E400);
document.write(10>2);
document.write("10" +5);
document.write(2>19);

console.log(2<1);

document.write(2==2);
document.write(3==1);

A = 10
B = 10

document.write(A === B);

C = 10
D = "10"

document.write(C === D);

E= 10
F = "monkey"
 
document.write(E===F);

G = "ten"
H = "eleven"

document.write(G===H)

document.write(5>2 && 2>1);

document.write(5>6 || 10>2);
function not_Function() {
    document.getElementById("Not").innerHTML = !(20>10);
}