'use strict'
// Declare all variables
let x = 9;
let y = 67;
let name = {fist:"manolis", last:"protopsaltis"};
let color = {color1:"blue", color2:"Red"};

console.log(typeof(x));
console.log(typeof(y));
console.log(typeof(name));
console.log(typeof(color));

if (typeof(x) == typeof(y)){
    console.log("SAME TYPE");
}else{
    console.log("NOT SAME");
}
if (typeof(x) == typeof(name)){
    console.log("SAME TYPE");
}else{
    console.log("NOT SAME");
}
if (typeof(x) == typeof(color)){
    console.log("SAME TYPE");
}else{
    console.log("NOT SAME");
}
if (typeof(y) == typeof(name)){
    console.log("SAME TYPE");
}else{
    console.log("NOT SAME");
}
if (typeof(y) == typeof(color)){
    console.log("SAME TYPE");
}else{
    console.log("NOT SAME");
}
if (typeof(name) == typeof(color)){
    console.log("SAME TYPE");
}else{
    console.log("NOT SAME");
}