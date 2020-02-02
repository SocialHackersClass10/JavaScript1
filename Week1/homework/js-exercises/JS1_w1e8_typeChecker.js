'use strict'

let str1 = "hi"; //1*
let str2 = "there"; 
let num1 = 1; 
let num2 = 2; //*1

console.log(typeof str1, typeof str2, typeof num1, typeof num2); //3

console.log("str1 and str2 has "); //2,4,5,6*
if (typeof str1 === typeof str2) console.log("the same type"); else console.log("not the same type");
console.log("str1 and num1 has ");
if (typeof str1 === typeof num1) console.log("the same type"); else console.log("not the same type");
console.log("str1 and num2 has ");
if (typeof str1 === typeof num2) console.log("the same type"); else console.log("not the same type");
console.log("str2 and num1 has ");
if (typeof str2 === typeof num1) console.log("the same type"); else console.log("not the same type");
console.log("str2 and num2 has ");
if (typeof str2 === typeof num2) console.log("the same type"); else console.log("not the same type");
console.log("num1 and num2 has ");
if (typeof num1 === typeof num2) console.log("the same type"); else console.log("not the same type"); //*2,4,5,6

/*
Write a program that checks the data types of two variables and logs to the console `SAME TYPE` if they are the same type. If they are different types log `Not the same...`.

1. Declare 4 variables: 2 must be `strings` and 2 must be `objects`
2. Create 6 conditional statements, where for each you check if the data type of one variable is the same as the other
3. Find out how to check the type of a variable
4. Write 2 `console.log` statements to log the type of 2 variables, each with a different data type
5. Now compare the types of your different variables with one another
6. Log `Not the same...` when the types are different
*/