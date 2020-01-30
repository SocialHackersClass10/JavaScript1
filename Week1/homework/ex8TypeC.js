'use strict'
var myString1="Same";
var myString2="Same";
var myNumber1=44;
var myNumber2=40;
console.log(typeof myString1);
console.log(typeof myString2);
if (typeof myString1==typeof myString2){
    console.log("SAME TYPE");
}
else{console.log("Not the same...");}

console.log(typeof myString1);
console.log(typeof myNumber1);
if (typeof myString1==typeof myNumber1){
    console.log("SAME TYPE");
}
else{console.log("Not the same...");}
