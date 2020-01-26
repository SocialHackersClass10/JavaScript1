'use strict'

let drinkTray = [];
const drinkTypes = ["cola","lemondade", "water"];

for (let i = 0; i < 5; i++) {
    if (i >2)  {
        drinkTray.push(drinkTypes[i-3]);
    } else {
      drinkTray.push(drinkTypes[i]);
    }
}

console.log("Hey guys i brought a " +  drinkTray.sort() + "!");

