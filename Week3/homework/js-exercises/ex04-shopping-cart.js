'use strict'

/*
    description     Exercise with array element adding & removing
*/

function runExercise04 () {
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-1 - week 3 - Exercise 04 - Supermarket Shopping Cart");
    console.log("Array element adding & removing");
    console.log("- - - - - - - - - - - - - - - - - - - -");
    function addToShoppingCart(itemList,itemAdded){
        let funcResult=`In the supermarket your cart contains [${itemList}]. `;
        if (itemList.indexOf(itemAdded)<0) {
            itemList.push(itemAdded);
            funcResult+=`You also added [${itemAdded}] but noticed you have 3 items `
                            +`so you removed [${itemList.shift()}].`;
        } else {
            funcResult+=`You tried to add [${itemAdded}] but noticed you already had some.`;
        }
        return funcResult+` You ended up buying [${itemList}].`;
    }
    let myShoppingList=['milk','bananas'];
    console.log(addToShoppingCart(myShoppingList,'coffee'));
    console.log(addToShoppingCart(myShoppingList,'bread'));
    console.log(addToShoppingCart(myShoppingList,'coffee'));
    console.log(addToShoppingCart(myShoppingList,'honey'));
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};

runExercise04();

