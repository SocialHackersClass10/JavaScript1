'use strict';
let calculateTotalPrice = (obj) => {
 let total = 0;

 for (let x in obj) {

  total += obj[x];

 }
 return total;
}

const cartForParty = {
 beers: 1.5,
 chips: 1,
 milk: 0.90,
 bread: 0.5,
 cheese: 2.5
};

let result = calculateTotalPrice(cartForParty);
console.log(`The total price is ${result}`);

// with reduce
let totalWithReduce = Object.values(cartForParty).reduce((accumulator, currentValue) =>
 accumulator + currentValue);
console.log("the total price is " + totalWithReduce);