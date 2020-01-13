'use strict'
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log("my string in the first time: "+myString);
console.log("the length of my String is: "+myString.length);
myString = myString.replace(/,/g, " ");
console.log("my string in the second time: "+myString);
