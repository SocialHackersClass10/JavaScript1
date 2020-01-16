// ------------------Exercise 1 (Hello world!)--------------------------------
var str="use strict";

var eng="Hello world!";
var indo="Halo dunia!"; // Indonesian
var ita="Ciao mondo!"; // Italian
var spn="Hola mundo!"; // Spanish
var gre="Γεια σου κόσμε!"; //Greek
var fra="Bonjour le monde!"; // French
var latin="Salve mundi!"; //Latin
var dan="Hej Verden!"; //Danish
var ger="Hallo Welt!"; //German
var port="Olá Mundo!"; //Portuguese

console.log(eng)
console.log(indo)
console.log(ita)
console.log(spn)
console.log(gre)
console.log(fra)
console.log(latin)
console.log(dan)
console.log(ger)
console.log(port)

//---------------------Exercise 2(Error debugging)------------------------------

// It needs double-quotes before and after the phrase.
console.log("I'm awesome");

//----------------- ---Exercise 3 (Log the number)-----------------------------

var numberX;
console.log ("numberX may be a number from 1 to 10");
console.log(numberX);
var numberX=5;
console.log ("numberX may be an integer");
console.log(numberX);

//---------------------Exercise 4 (Log the string)----------------------------
var myString="Efthymios Rodias";
console.log("This string may be a name");
console.log(myString);
var myString="E. Rodias";
console.log ("This should be a shortcut of a name");
console.log(myString);

//---------------------Exercise 5(Round a nummber and log it)-------------------
var z=7.25;
console.log(z);
var a=8;
console.log(a);
if (a>z){
    var hNew=a;
    console.log(a);
}

//---------------------Exercise 6(Log an array of animals)-------------------
var items=[];
console.log("I have no idea what is inside this array");
console.log(items);
var favAnimals=["Dog", "Horse", "Tiger"];
console.log(favAnimals);
favAnimals.push("Piglet");
console.log(favAnimals);

//---------------------Exercise 7(Log the length of a string)-------------------
var mySentence="Programming is so interesting!";
var sentLength=mySentence.length;
console.log(sentLength);

//---------------------Exercise 8(Type checker)--------------------------------
let name="Takis";
let surname="Patatakis";
let person= {firstName:"Roula", lastName:"Sakoula"};
let personDetails={age:50, gender:"female"};
console.log(typeof name);
console.log(typeof personDetails);

if (typeof name==typeof surname ) {
    console.log("name and surname are the SAME TYPE");
}

if (typeof name==typeof person) {
    console.log("");
}
console.log("name and person are not the same type");

if (typeof name==typeof personDetails) {
    console.log("");
}
console.log("name and personDetails are not the same type");

if (typeof surname==typeof person) {
    console.log("");
}
console.log("surname and person are not the same type");
if (typeof surname==typeof personDetails) {
    console.log("");
}
console.log("surname and personDetails are not the same type")
if (typeof person==typeof personDetails) {
    console.log("person and personDetails are the SAME TYPE")
}

//---------------------Exercise 9 (Log the remainder)--------------------------------
//1. The solution of x=7 and x=x%3, will be 1, because if we devide 7 by 2 will have 3 and remainder 1.
//2. The solution of y=21 and y=y%4, will be 1, because 4 can be subtracted 5 times from 21 and give us remainder 1.
//3. The solution of z=13 and y=y%2, will be 1, because 2 can be subtracted 6 times from 13 and give us remainder 1. 

//---------------------Exercise 10 (Compare arrays)--------------------------------
var Array1=[5, "ciao", 25, 4];
var Array2=[1,"hola",6,75,"bye", 8,11];
var Arr1length=Array1.length;
var Arr2length=Array2.length;
console.log("The length of the 1st array is " + Arr1length);
console.log("The length of the 2nd array is " + Arr2length);
if (Arr1length==Arr2length){
    console.log("They are the same")
}
if (Arr1length!==Arr2length){
    console.log("Two different sizes")
}