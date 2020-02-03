'use strict'

function addToShoppingCart(item) {
    let shoppingList = ["bananas","milk"];
    shoppingList.push(item);
    if (shoppingList.length > 3) {
        shoppingList.shift();
    }
    return `You bought ${shoppingList}`;
}

console.log(addToShoppingCart("potato"));
console.log(addToShoppingCart("tomato"));
console.log(addToShoppingCart("onioun"));