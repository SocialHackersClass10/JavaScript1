'use strict'

//exercises 8
let mkString1 = '100';
let cdString2 = '200';
let person = {name:'John'}; 
let people = {other:'material'};
//checking data type
console.log(typeof mkString1);
//console.log(typeof cdString2);
console.log(typeof person);
//console.log(typeof other);
//Check if data type is the same
if (typeof(mkString1) == typeof(cdString2)){
    console.log("SAME TYPE");
}else{
    console.log("NOT SAME");
}
if (typeof(mkString1) == typeof(person)){
    console.log("SAME TYPE");
}else{
    console.log("NOT SAME");
}
if (typeof(mkString1) == typeof(people)){
    console.log("SAME TYPE");
}else{
    console.log("NOT SAME");
}
if (typeof(cdString2) == typeof(person)){
    console.log("SAME TYPE");
}else{
    console.log("NOT SAME");
}
if (typeof(cdString2) == typeof(people)){
    console.log("SAME TYPE");
}else{
    console.log("NOT SAME");
}
if (typeof(person) == typeof(people)){
    console.log("SAME TYPE");
}else{
    console.log("NOT SAME");
}
