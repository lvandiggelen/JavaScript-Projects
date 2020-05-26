function getReceipt () {
    var text1 = "<h3> You Ordered: </h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal =6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal =8;
    }else if (selectedSize === "Medium Pizza") {
        sizeTotal =10;
    }else if (selectedSize === "Large Pizza") {
        sizeTotal =14;
    }else if (selectedSize === "Extra Large Pizza") {
        sizeTotal =16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1:"+text1);
    console.log("subtotal: $" +runningTotal+".00");
    getTopping(runningTotal,text1);
    getReceipt(runningTotal,text1);
};

function getTopping(runningTotal,text1) {
    var ToppingTotal = 0;
    var selectedTopping = [];
    var ToppingArray = document.getElementsByClassName("Toppings");
    for (var j=0; j<ToppingArray.length; j++) {
        if (ToppingArray[j].checked) {
            selectedTopping.push(ToppingArray[j].value+"<br>")
        }
    }
    var ToppingCount = selectedTopping.length;
    if (ToppingCount>1) {
        ToppingTotal = (ToppingCount - 1);
    } else {
        ToppingTotal = 0;
    }
    runningTotal = (runningTotal + ToppingTotal);
    console.log("total selected Topping items: " +ToppingCount);
    console.log(ToppingCount+" Topping - 1 free Topping = " + "$" +ToppingTotal+".00");
    console.log("Topping text1: "+text1);
    console.log("Purchase Total: " + "$" +runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$" +runningTotal+".00"+"</strong></h3>";
};