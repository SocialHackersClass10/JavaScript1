'use strict'

let str1 = "hi";
let str2 = "there";
let num1 = 1;
let num2 = 2;

console.log(typeof str1, typeof str2, typeof num1, typeof num2);

console.log("str1 and str2 has ");
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
if (typeof num1 === typeof num2) console.log("the same type"); else console.log("not the same type");