'use strict'
let capitalCity1="Tokyo";
let capitalCity2="Mexico City";
var person = {firstName:'John' , lastName:'Doe' , age:'50' , eyeColor:'blue'};
var airPort = {city:'Athens', runWayLength:'4Km', elevation:'94m'};

//logging two different data type out of the six variables declared

console.log(typeof (capitalCity2));
console.log(typeof (person));

//comparing data types of Each Variables

if(typeof (capitalCity1) == typeof (person)){
    console.log('The data type of  variable +" "+  "capitalCity1" is: the SAME TYPE as variable "person"');
    } else {
        console.log("The data type of" + 'variable "capitaCity1" is:' + "Not the same as" + 'variable "person"');
    }
if(typeof (capitalCity1) == typeof (capitalCity2)){
    console.log("The data type of" + 'variable "capitalCity1" is:' + "the SAME TYPE as" + 'variable "capitalCity2"');
    } else {
    console.log("The data type of" + 'Variable "capitalCity1" is:' + "Not the same as" + 'Variable "capitalCity2"');
    }
if(typeof (capitalCity1) == typeof (airPort)){
    console.log("The data type of" + 'variable "capitalCity1" is:' + "the SAME TYPE as" + 'variable "airPort"');
    } else {
    console.log("The data type of" + 'Variable "capitalCity1" is:' + "Not the same as" + 'variable "airPort"');
    }
if(typeof (capitalCity2) == typeof (person)){
    console.log("The data type of" + 'variable "capitalCity2" is:' + "the SAME TYPE as" + 'variable "person"');
    } else {
     console.log("The data type of" + 'variable "capitalCity2" is:' + "Not the same as" + 'variable "person"');
    }
if(typeof (capitalCity2) == typeof (airPort)){
    console.log("The data type of" + 'variable "capitalCity2" is:' + "the SAME TYPE as" + 'variable "airPort"');
    } else {
    console.log("The data type of" + 'variable "capitalCity2" is:' + "Not the same as" + 'variable "airPort"');
    }
    
if(typeof (person) == typeof (airPort)){
    console.log("The data type of" + 'variable "person" is:' + "the SAME TYPE as" + 'variable "airPort"');
    } else {
    console.log("The data type of" + 'variable "person" is:' + "Not the same as" + 'variable "airPort"');
    }
    

    
    
    
    