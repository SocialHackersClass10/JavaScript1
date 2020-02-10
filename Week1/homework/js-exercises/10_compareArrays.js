'use strict'

//Declare 2 variables, that each hold an array. The first array should have 4 items, the second 7 items
const array1=["one",1,true,{name:"array1"}];
const array2=["one",2,3,"four","five",6,7];

//Find out how to get the length of each array. Write a console.log statement that shows the length of each array
console.log("Array1 has length of "+ array1.length);
console.log("Array2 has length of "+ array2.length);

//Write a conditional statement that checks if both are of equal length. If they are, log to the console They are the same!, if not log Two different sizes
if(array1==array2){
    console.log("They are the same!");
}
else  console.log("Two different sizes");