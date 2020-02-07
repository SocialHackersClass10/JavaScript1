'use strict'

/*
    description     exercise with array legth
*/

function runExercise10 () {
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-1 - week 1 - Exercise 10");
    console.log("Define two arrays and log their lengths");
    console.log("- - - - - - - - - - - - - - - - - - - -");
    function getArrayInfo(arrayName,arrayRef){
        return "Created an array named `"+arrayName
                +"` with length of `"+arrayRef.length
                +"` and values `"+arrayRef+"`";
        }
    let myFamily=['Father','Mother','Brother','Sister'];
    console.log(getArrayInfo("myFamily",myFamily));
    let farmAnimals=['Cow','Horse','Pig','Goat','Chicken','Turkey','Sheep'];
    console.log(getArrayInfo("farmAnimals",farmAnimals));
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};

runExercise10();

