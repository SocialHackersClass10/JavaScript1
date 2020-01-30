'use strict'

/*
    description     exercise with string manipulation
*/

function runExercise01 () {
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-1 - week 2 - Exercise 01");
    console.log("String manipulation");
    console.log("- - - - - - - - - - - - - - - - - - - -");
    let myString = "hello,this,is,a,difficult,to,read,sentence";
    console.log("declared a variable `myString` with value `"+myString+"` and length = "+myString.length);
    myString=myString.replace(/,/g," ");
    console.log("Replaced all commas with space in `myString` the new value is `"+myString+"`");
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};

runExercise01();

