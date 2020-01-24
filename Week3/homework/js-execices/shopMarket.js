'use strict'
function addToShoppingCart(article){
    if (epicerieTab.length>2){
        epicerieTab.shift();
    } 
    epicerieTab.push(article);
    console.log("You bought "+epicerieTab);

}
let epicerieTab=["Bananas", "Milk"];
addToShoppingCart("Mangue");
addToShoppingCart("Orange");
addToShoppingCart("Fraise");