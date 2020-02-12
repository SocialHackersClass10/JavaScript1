'use strict';

const cartForParty = {beers:1.75, chips:0.99, cola:1.50, pizza:5.90, energydrink:1.20}; //2

function calculateTotalPrice(obj){ //1, 1a
    const values = Object.values(obj);
    let total = 0;
    for (const value of values) total+=value; //1b
    return total;  //1c
}

calculateTotalPrice(cartForParty); //3

console.log(`You have to pay $${calculateTotalPrice(cartForParty)}.`);

/*
You want to buy a couple of things from the supermarket to prepare for a party. 
After scanning all the items the cashier gives you the total price, but the machine a broken! Let's write her a function that does it for her instead!

1. Write a function called `calculateTotalPrice`

- It takes 1 argument: an object that contains properties that only contain number values
- Add all the number values together
- Return a number: the total price of all items

2. Create an object named `cartForParty` with 5 properties. Each property should be a grocery item (like `beers` or `chips`) and hold a number value (like `1.75` or `0.99`)
3. Call the function 1 time, giving it the object `cartForParty` as an argument
*/