'use strict'

/*
    description     exercise with accessing a random array element
*/

function runExercise01 () {
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-1 - week 3 - Exercise 01 - Random compliment");
    console.log("Access random array element");
    console.log("- - - - - - - - - - - - - - - - - - - -");
    function getCompliment(myName){
        let listCompliments=[ 'Awesome',      'Magnificent',  'Amazing',   'Wondeful',  'Wondrous',
                              'Mind-blowing', 'Jaw-dropping', 'Excellent', 'Marvelous', 'Impressive' ];
        return `Hey ${myName}, you are ${listCompliments[Math.floor(Math.random()*10)]}!`;
    }
    console.log(getCompliment("Manolis"));
    console.log(getCompliment("Manolis"));
    console.log(getCompliment("Manolis"));
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};

runExercise01();

