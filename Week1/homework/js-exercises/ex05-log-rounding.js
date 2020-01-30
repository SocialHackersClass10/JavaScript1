'use strict'

/*
    description     exercise with decimal number, rounding and value comparison
*/

function runExercise05 () {
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-1 - week 1 - Exercise 05");
    console.log("Decimal numbers, rounding and value comparison");
    console.log("- - - - - - - - - - - - - - - - - - - -");
    console.log("declaring new variable `z` and assigning it a value of `7.25`");
    let z=7.25;
    console.log(z);
    console.log("declaring new variable `a` and assign it the value of `z` rounded to the nearest integer");
    let a=Math.round(z);
    console.log(a);
    console.log("declaring another variable `maxAorZ` and assign it the highest value between `z` and `a`");
    let maxAorZ = a>z ? a : z;
    console.log(maxAorZ);
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};

runExercise05();

