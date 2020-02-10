'use strict'
/*Write a program that checks the data types of two variables and logs to the console SAME TYPE if they are the same type. 
If they are different types log Not the same....*/
/*Declare 4 variables: 2 must be strings and 2 must be objects*/
let string1="social";
let string2="hackers";
let fname={firstname:"kiriakos"};
let lname={lastname:"mouzakis"};

/*Create 6 conditional statements, where for each you check if the data type of one variable is the same as the other*/
if (typeof string1 === typeof string2) {console.log("string1 and string2 are the same type");} 
if (typeof string1 === typeof fname) {console.log("string1 and fname are the same type");} 
if (typeof string1 === typeof lname) {console.log("string1 and lname are the same type");}
if (typeof string2 === typeof fname) {console.log("string2 and fname are the same type");}
if (typeof string2 === typeof lname) {console.log("string2 and lname are the same type");}
if (typeof fname === typeof lname) {console.log("fname and lname are the same type");}

/*Find out how to check the type of a variable*/
console.log("You  can check a type of a variable with the typeof() command eg.. The type of fname is an "+typeof fname);

/*Write 2 console.log statements to log the type of 2 variables, each with a different data type*/
console.log(typeof(string1));
console.log(typeof(lname));

/*Now compare the types of your different variables with one another*/
/*Log Not the same... when the types are different*/
let num1=1;
if (typeof string1 === typeof string2) {console.log("string1 and string2 are the same type")} else {console.log("Not the same type"); } 
if (typeof string1 === typeof fname) {console.log("string1 and fname are the same type");} else {console.log("Not the same type"); }
if (typeof string1 === typeof lname) {console.log("string1 and lname are the same type");} else {console.log("Not the same type"); }
if (typeof string2 === typeof fname) {console.log("string2 and fname are the same type");} else {console.log("Not the same type"); }
if (typeof string2 === typeof lname) {console.log("string2 and lname are the same type");} else {console.log("Not the same type"); }
if (typeof fname === typeof lname) {console.log("fname and lname are the same type");} else {console.log("Not the same type"); }
if (typeof num1 === typeof string1) {console.log("num1 and string1 are the same type");} else {console.log("Not the same type"); }
if (typeof num1 === typeof string2) {console.log("num1 and string2 are the same type");} else {console.log("Not the same type"); }
if (typeof num1 === typeof fname) {console.log("num1 and fname are the same type");} else {console.log("Not the same type"); }
if (typeof num1 === typeof lname) {console.log("num1 and lname are the same type");} else {console.log("Not the same type"); }