'use strict'
//You know how old your dog is in human years, but what about dog years? Calculate it!

/*1. Write a function named `calculateDogAge`.
- It takes 1 argument: your puppy's age (number).
- Calculate your dog's age based on the conversion rate of 1 human year to 7 dog years.
- Return a string: "Your doggie is [CALCULATED_VALUE] years old in dog years!"*/
function calculateDogAge(number){
    let dogAge=number*7;

    console.log(`Your doggie is ${dogAge} years old in dog years!`)
}

//2. Call the function three times with different sets of values.*/

for(let i=0; i<3; i++){
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    calculateDogAge(getRandomInt(15));
}