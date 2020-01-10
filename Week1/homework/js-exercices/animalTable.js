'use strict'
let numbersTable=[];
console.log("I create an empty table");
numbersTable=[1, 3, 5, 7, 9];
console.log("Numbers table:");
let x; let i=0;
for (x of numbersTable) {
    console.log(numbersTable[i]); i++;
}
let animalsTable=["Lion", "Cat", "Dogg"];
console.log("\nAnimals table 1:");
i=0;
for (x of animalsTable) {
    console.log(animalsTable[i]); i++;
}
animalsTable.push("Porcelet");
console.log("\nAnimals table 2:");
i=0;
for (x of animalsTable) {
    console.log(animalsTable[i]); i++;
}
