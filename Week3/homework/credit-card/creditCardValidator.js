    function sigrisi(pass) {
    return pass.split('').every(char => char === pass[0]);
    //You don't have to go over the complete string if the chars do not match. 
    //src https://stackoverflow.com/questions/41192854/function-that-checks-whether-all-characters-in-a-string-are-equal-javascript-h
   }
   
   function sum(pass) {
    let total = 0;
    for (i = 0; i < pass.length; i++) {
     total += parseInt(pass[i]);
    }
    return total;
   
   }
   
   function credit(pass) {
    let passString = pass.toString();
    let a = /^[0-9]+$/;
    let minima = "invalid";
    let minima2 = "valid";
   
    if (!passString.match(a) || passString.length !== 16) {
     console.log(`${minima} Must be 16 digits only numbers`);
    } else if (sigrisi(passString) === true) {
     console.log(`${minima} Same number`);
   
    } else if (passString.charAt(15) % 2 !== 0) { //charArt function select char in any position you want
     console.log(`${minima} Last numb mast be even`);
   
    } else if (sum(passString) <= 16) {
     console.log(`${minima} The sum mast be 16`);
   
    } else {
     console.log(`${minima2}:Password accepted`)
    }
   
   }
//invalid
   credit("a92332119c011112");
   credit ("4444444444444444");
   credit ("1111111111111110" );
   credit("6666666666666661");

   //valid
   credit("1111111111111142");
   credit("5555050000000010");