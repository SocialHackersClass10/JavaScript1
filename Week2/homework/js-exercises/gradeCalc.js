"use strict";
function vathmos(score){
    let grade;
    switch(true) {
        case score < 50: 
          grade = " You got an F " + parseFloat(score)+"%";
          break;
        case score < 60: 
          grade = " You got a E " + parseFloat(score)+"%";
          break;
        case score < 70: 
          grade =" You got a D " + parseFloat(score)+"%";
          break;
        case score < 80: 
          grade = " You got a C"  + parseFloat(score)+"%";
          break;
          case score < 90: 
          grade = "You got a B " + parseFloat(score)+"%";
          break;
        case score <= 100:
          grade = "You got a A " + parseFloat(score)+"%";
          break;
      }
      return grade;
}

let result = vathmos (60);
console.log(result);