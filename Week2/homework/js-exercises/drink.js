// "use strict";
// let drinkTray = [];
// let pota = 0;
// const drinkTypes = ["cola", "lemonade", "water"];

// for (let i = 0; i <= 5; i++){
//     if (drinkTypes[pota] === undefined){  //na ksekinaei apo tin arxi to array
//         pota = 0;
//     }
//     else{
//     drinkTray.push (drinkTypes[pota]);
//     pota+=1;
//     }
// }
// console.log("Hey guys, I brought a "+ drinkTray);


let drinkTray = [];
const drinkTypes = ["cola","lemondade", "water"];

for (i = 0; i < 5; i++) {
    if (i >2)  {
        drinkTray.push(drinkTypes[i-3]);
    } else {
      drinkTray.push(drinkTypes[i]);
    }
}

console.log("Hey guys i brought a " +  drinkTray.sort() + "!");