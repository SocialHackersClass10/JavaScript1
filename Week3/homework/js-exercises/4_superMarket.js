'use strict'
/*Let's do some grocery shopping! We're going to get some things to cook dinner with. However, you like to spend your money and always buy too many things. 
So when you have more than 3 items in your shopping cart the first item gets taken out.
1. Write a function named `addToShoppingCart`.
- It takes in 1 argument: a grocery item (string)
- Add grocery item to array. If the amount of items is more than 3 remove the first one in the array
- Return a string: "You bought [LIST_OF_GROCERY_ITEMS]!"
2. Create an array with 2 predefined strings: `"bananas"` and `"milk"`*/

let shoppingItems=[
    "bananas",
    "milk"
]
function addToShoppingCart(product){
    if(shoppingItems.length > 2)
        shoppingItems.shift()
        shoppingItems.push(product)
        return(`You bought ${shoppingItems}!`)
}

//3. Call the function 3 times, each time with a different string as the argument.
console.log(addToShoppingCart("bacon"));
console.log(addToShoppingCart("salmon"));
console.log(addToShoppingCart("beef"));



