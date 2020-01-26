'use strict'

let commars = "hello,this,is,a,difficult,to,read,sentence";
console.log(commars.length);

let removeCommars = commars.split(',').join(""); //replace(/,/g, ''); 
console.log(removeCommars);    