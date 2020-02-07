'use strict'

/*
    description     exercise with even / odd numbers
*/

function runExercise02 () {
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-1 - week 2 - Exercise 02");
    console.log("Even / odd numbers");
    console.log("- - - - - - - - - - - - - - - - - - - -");
    console.log("Loop from 0 to 20 and log if the current loop control variable is even or odd");
    for (let i=0; i<21; i++) {console.log(`The number ${i} is ${(i%2)==0?"even":"odd"}!`)};
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};

runExercise02();

