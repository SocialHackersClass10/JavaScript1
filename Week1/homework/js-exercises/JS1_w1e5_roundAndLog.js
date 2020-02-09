'use strict'

let z = 7.25; //1
console.log(z); //2
let a = Math.round(z); //3
console.log(a); //4
let x = 0;
if (z<a) x = a; //5
else x = z;
console.log(x); //6

/*
1. Declare a variable `z` and assign the number 7.25 to it.
2. Write a `console.log` statement in which you log the value of `z`.
3. Declare another variable `a` that has the value of `z` but rounded to the nearest integer.
4. Write a `console.log` statement in which you log the value of `a`.
5. So now we have `z` and `a` find a way to compare the two values and store the highest of the two in a new variable.
6. Write a `console.log` statement in which you log the value of the highest value.*/