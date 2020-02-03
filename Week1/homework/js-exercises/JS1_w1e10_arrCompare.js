'use strict'

const arr1 = [123,234,0,1]; //1
const arr2 = [192,168,1,1,255,0,0]; //1

console.log("The length of the arr1 is " + arr1.length + " and the length of the arr2 is " + arr2.length); //2

if(arr1.length === arr2.length) console.log("arr1 and arr2 has the same length"); //3
else console.log("arr1 and arr2 has not the same length"); //3

/*
1. Declare 2 variables, that each hold an array. The first array should have 4 items, the second 7 items
2. Find out how to get the length of each array. Write a `console.log` statement that shows the length of each array
3. Write a conditional statement that checks if both are of equal length. If they are, log to the console `They are the same!`, if not log `Two different sizes`
*/