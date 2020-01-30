'use strict'

/*
    description     exercise with arrays: declaring and adding elements
*/

function runExercise06 () {
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-1 - week 1 - Exercise 06");
    console.log("Declaring arrays and adding elements");
    console.log("- - - - - - - - - - - - - - - - - - - -");
    console.log("declare a variable `emptyElements` and initialize it to an empty array");
    let emptyElements=[];
    console.log("The value of the `emptyElements` variable is an empty array");
    console.log(emptyElements);
    console.log("Declare an array `myFavoriteAnimals` containing my 3 favorite animals");
    let myFavoriteAnimals=['Frilled Shark','Martialis Huereka','Jelly Fish'];
    console.log(myFavoriteAnimals);
    console.log("Add another element to the array `myFavoriteAnimals` with the value `Piglet`");
    myFavoriteAnimals.push('Piglet');
    console.log(myFavoriteAnimals);
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};

runExercise06();

