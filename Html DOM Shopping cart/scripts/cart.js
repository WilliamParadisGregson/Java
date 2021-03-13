var shopingcart = (function(){

    var brands = [{ brand: "duck", price:11}, { brand: "frog", price:7.50}, { brand: "robot", price:17}];

    return{
        addItems1: function(){
            var oldNumber = Number(document.getElementById("items1").innerHTML)
            document.getElementById("items1").innerHTML = oldNumber+1
        },
        subtotal1: function(i){
            var oldPrice = Number(document.getElementById("sub1").innerHTML)
            var itemPrice = brands[i].price
            document.getElementById("sub1").innerHTML = oldPrice + itemPrice
        },
        addItems2: function(){
            var oldNumber = Number(document.getElementById("items2").innerHTML)
            document.getElementById("items2").innerHTML = oldNumber+1
        },
        subtotal2: function(i){
            var oldPrice = Number(document.getElementById("sub2").innerHTML)
            var itemPrice = brands[i].price
            document.getElementById("sub2").innerHTML = oldPrice + itemPrice
        },
        addItems3: function(){
            var oldNumber = Number(document.getElementById("items3").innerHTML)
            document.getElementById("items3").innerHTML = oldNumber+1
        },
        subtotal3: function(i){
            var oldPrice = Number(document.getElementById("sub3").innerHTML)
            var itemPrice = brands[i].price
            document.getElementById("sub3").innerHTML = oldPrice + itemPrice
        },



        addPrice: function(i){
            var oldPrice = Number(document.getElementById("total").innerHTML)
            var itemPrice = brands[i].price
            document.getElementById("total").innerHTML = oldPrice + itemPrice
        },

        clear: function(){
            document.getElementById("items1").innerHTML = ""
            document.getElementById("sub1").innerHTML = ""
            document.getElementById("items2").innerHTML = ""
            document.getElementById("sub2").innerHTML = ""
            document.getElementById("items3").innerHTML = ""
            document.getElementById("sub3").innerHTML = ""
            document.getElementById("total").innerHTML = ""
        }
    
        };
    })();

    document.getElementById("duck").addEventListener("click", function(){ 
        shopingcart.addItems1(0)
        shopingcart.subtotal1(0)
        shopingcart.addPrice(0)});
    document.getElementById("frog").addEventListener("click", function(){ 
        shopingcart.addItems2(1)
        shopingcart.subtotal2(1)
        shopingcart.addPrice(1)});
    document.getElementById("robot").addEventListener("click", function(){ 
        shopingcart.addItems3(2)
        shopingcart.subtotal3(2)
        shopingcart.addPrice(2)});
    document.getElementById("clear").addEventListener("click", function(){ 
        shopingcart.clear()});
