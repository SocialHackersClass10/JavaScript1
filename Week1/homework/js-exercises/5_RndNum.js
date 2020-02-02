'use strict'
/*Declare a variable z and assign the number 7.25 to it.*/
let z=7.25;

/*Write a console.log statement in which you log the value of z.*/
console.log("'Z' value is "+z);

/*Declare another variable a that has the value of z but rounded to the nearest integer.*/ 
let a;
a=Math.round(z);

/*Write a console.log statement in which you log the value of a.*/
console.log("'A' has the same value but is rounded "+a);

/*So now we have z and a find a way to compare the two values and store the highest of the two in a new variable. */
/*Write a console.log statement in which you log the value of the highest value.*/
function bigger(){
    if(a>z) {console.log("'A' is bigger with value of "+a)
    }
    else {console.log("'Z' is bigger with value of "+z)
    }
}
bigger()