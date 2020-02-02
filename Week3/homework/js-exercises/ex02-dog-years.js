'use strict'

/*
    description     exercise with calculating a number based on a rule
*/

function runExercise01 () {
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-1 - week 3 - Exercise 02 - Dog years");
    console.log("Calculate a number based on rules");
    console.log("- - - - - - - - - - - - - - - - - - - -");
    function calculateDogAge(dogName,isMale,yearBorn){
        let currentYear=(new Date()).getFullYear();
        // normalize dog's birthYear    -   allowed values from (currentYear-20) to currentYear
        yearBorn=(yearBorn<(currentYear-20)?currentYear-20:
                        (yearBorn>currentYear?currentYear:yearBorn));
        let bornText=(yearBorn==currentYear?"this year":
                        (yearBorn==(currentYear-1)?"last year":`in ${yearBorn}`));
        let yearText=(currentYear-yearBorn)==0?"a newborn pup":
                        `approximately ${(currentYear-yearBorn)*7} dog years old!`;
        return `My dog ${dogName} was born ${bornText}, ${isMale?"he":"she"} is ${yearText}`;
    }
    console.log(calculateDogAge("Bleu",false,1915));
    console.log(calculateDogAge("Ruby",false,2020));
    console.log(calculateDogAge("Max",true,2019));
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};

runExercise01();

