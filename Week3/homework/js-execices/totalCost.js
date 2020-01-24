'use strict'
function calculateTotalPrice(price) {
    let cal=0;
    for(let obj in price){
        cal+=price[obj];
    }
    console.log("the total price of all items is : "+cal+"euros")
}

let cartForParty={
    oil: 6.88,
    paper: 0.75,
    vegetable:5.22,
    Milk : 0.65,
    Mayonnaise: 1.43
}
calculateTotalPrice(cartForParty);