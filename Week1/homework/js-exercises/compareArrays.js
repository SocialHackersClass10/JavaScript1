'use strict';
let array1 = ["manwlis", true, 35 ,{color1:"black",color2: "yellow"}];
let array2 = [false ,"protopsaltis" , {month1:"april", month2:"may"}, "45", [1,2,3], true , null];
console.log("the lenght of the array1 is: "+ array1.length);
console.log("the lenght of the array2 is: "+ array2.length);

if( array1.length === array2.length){
    console.log("The are the same!");
}else{
    console.log("Two diffent sizes");
}