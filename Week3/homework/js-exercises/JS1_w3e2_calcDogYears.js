'use strict';

function calculateDogAge(age){ //1, 1a
    age*=7; //1b
    return (`Your doggie is ${age} years old in dog years!`) //1c
};

console.log(calculateDogAge(8));



/*1. Write a function named `calculateDogAge`.

- It takes 1 argument: your puppy's age (number).
- Calculate your dog's age based on the conversion rate of 1 human year to 7 dog years.
- Return a string: "Your doggie is [CALCULATED_VALUE] years old in dog years!"
*/