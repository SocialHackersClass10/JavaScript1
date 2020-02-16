'use strict'
/*You want to buy a couple of things from the supermarket to prepare for a party. After scanning all the items the cashier gives you the total price, 
but the machine a broken! Let's write her a function that does it for her instead!

1. Write a function called `calculateTotalPrice`
- It takes 1 argument: an object that contains properties that only contain number values
- Add all the number values together
- Return a number: the total price of all items
2. Create an object named `cartForParty` with 5 properties. Each property should be a grocery item (like `beers` or `chips`) and hold a number value (like `1.75` or `0.99`)*/
function calculateTotalPrice(cartForParty){
    cartForParty={
        beer:1.75,
        chips:0.99,
        coca_cola:3.90,
        pizza:6.70,
        party_cake:15.70
    }
            let total = 0;
            for (let property in cartForParty) {
            total += cartForParty[property];
}
            return total;
}
//3. Call the function 1 time, giving it the object `cartForParty` as an argument*/
console.log("Total price: "+calculateTotalPrice()+"€");


