'use strict';

function cardValidator(number) { 
  var number; 
  let even = number.match(/^(d*[0-9]){15}[02468]/gs); //Takes 15 digits and the last one must be even number, if not returns null.
  let sameNum= number.match(/^(\d)(?!\1+$)\d{15}$/gs); //Checks if the numbers are the same, if not returns null.
  
  function overSixteen() {  //Function that checks if the sum off all numbers are over 16, if not returns null.
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += parseInt(number[i]);
    }
      if(sum<16){
         return null;
     }
    }


  if(even && sameNum && overSixteen != null) { 
  console.log("Valid card: "+number);
  }
  else
        console.log("Invalid card: "+number)
  }

cardValidator("1234567891234566");
cardValidator("6666666666661666");  
cardValidator("a92332119c011112");
cardValidator("4444444444444444");
cardValidator("1111111111111110");
cardValidator("6666666666666661");

  
/*In this project you'll write a script that validates whether or not a credit card number is valid.

Here are the rules for a valid number:

- Number must be 16 digits, all of them must be numbers
- You must have at least two different digits represented (all of the digits cannot be the same)
- The final digit must be even
- The sum of all the digits must be greater than 16
- The following credit card numbers are valid:

9999777788880000
6666666666661666

The following credit card numbers are invalid:

a92332119c011112 (invalid characters)
4444444444444444 (only one type of number)
1111111111111110 (sum less than 16)
6666666666666661 (odd final number)

These are the requirements your project needs to fulfill:

- Make a JavaScript file with a name that describes its contents
- Create a function with a descriptive name, for example: `doSomething` or `calcAnotherThing`
- Write at least 2 comments that explain to others what a line of code is meant to do
- Make the return value of the function a template string, so you can insert variables!
- Use `node` from the command line to test if your code works as expected
*/