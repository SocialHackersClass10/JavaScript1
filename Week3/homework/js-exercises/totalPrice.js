'use strict'

function calculateTotalPrice(price) {
    let groc=0;
    for(let object in price) {

        groc+=price[object];
    };

    console.log("The total price items is "+groc+"euro.");
}

let cartForParty={
    beers: 5.65,
    chips: 0.99,
    milk: 3.05,
    chocolate: 7.6,
    cola: 2.5,
};

calculateTotalPrice(cartForParty);
