'use strict';
let addToShoppingCard = (item) => {
    shop.push(item);
    if (shop.length > 3) {
     shop.shift();
   
    }
   
    console.log(`You bought ${shop}!`);
   }
   let shop = ["bananas", "milk", ];
   addToShoppingCard("apple");
   addToShoppingCard("beer");
   addToShoppingCard("tomatoes");