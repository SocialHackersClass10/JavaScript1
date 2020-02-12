'use strict';

let myString = "hello,this,is,a,difficult,to,read,sentence"; //1
console.log(myString.length); //2
for(let i = 0; i<=myString.length; i++) myString = myString.replace(',',' '); //3 
console.log(myString); //4

/*
1. Add the variable to your file.
2. Log the length of `myString`.
3. The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces. (use Google!)
4. After replacing the commas, log `myString` to see if you succeeded.
*/