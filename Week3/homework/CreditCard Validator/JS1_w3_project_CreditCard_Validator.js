'use strict';


window.onload = function(){

    const userIN = document.getElementById('cardIN');
    const lengthC = document.getElementById('lengthCounter');
    const cardLength = document.getElementById('cardLength');
    const onlyNumbers = document.getElementById('onlyNumbers');
    const notSameDigits = document.getElementById('notSameDigits');
    const lastEven = document.getElementById('lastEven');
    const numTotal = document.getElementById('numTotal');

    function lengthCounter(paramIN){  // this function counts the digits of the input
        const len = paramIN.length;
        lengthC.innerHTML = (`<b>Number of Characters: ${len} </b>`);
    };

    function lengthValidator(paramIN){ // this function checks if the card has the right length, 16 digits
        if (paramIN.length == 16) {
            cardLength.classList.remove('invalid');
            cardLength.classList.add('valid');
        }
        else {
            cardLength.classList.remove('valid');
            cardLength.classList.add('invalid');
        }
    };

    function numValidator(paramIN){
        const upperCase = /[A-Z]/g; //using regex we check if the input character is uppercase
        const lowerCase = /[a-z]/g; // or lowercase
        const symbols = /[$-/:-?{-~!"^_`\[\]@#]/g; // or symbols
        if (paramIN.match(upperCase) || paramIN.match(lowerCase) || paramIN.match(symbols)){
            onlyNumbers.classList.remove('valid');
            onlyNumbers.classList.add('invalid');
        }
        else {
            onlyNumbers.classList.remove('invalid');
            onlyNumbers.classList.add('valid');
        }
    };

    function notSameDigs(paramIN){
        const numbers = /([0-9])\1{15}/g; // numbers takes value when a number has the same digit for 16 times
        if (paramIN.match(numbers)){ // if that happen, then the if evaluates true 
            notSameDigits.classList.remove('valid');
            notSameDigits.classList.add('invalid');
        }
        else {
            notSameDigits.classList.remove('invalid');
            notSameDigits.classList.add('valid');
        }
    };

    function lastNumEven(paramIN){
        const num = /^\d*[02468]$/g;
        if (paramIN.match(num)){
            lastEven.classList.remove('invalid');
            lastEven.classList.add('valid');
        }
        else{
            lastEven.classList.remove('valid');
            lastEven.classList.add('invalid');
        }
    };

    function numbersTotal(paramIN){
        let value = paramIN;
        let sum = value.toString().split('').map(Number).reduce(function (a, b){
            return a + b;
        }, 0);
        
        if (sum>=16){
            numTotal.classList.remove('invalid');
            numTotal.classList.add('valid');
        }
        else{
            numTotal.classList.remove('valid');
            numTotal.classList.add('invalid');
        }
    };


    userIN.addEventListener('keyup', (event) => {
        const cardNumber = userIN.value;
        lengthCounter(cardNumber);
        lengthValidator(cardNumber);
        numValidator(cardNumber);
        notSameDigs(cardNumber);
        lastNumEven(cardNumber);
        numbersTotal(cardNumber);
    }, false);

};

/*
- Number must be 16 digits, all of them must be numbers
- You must have at least two different digits represented (all of the digits cannot be the same)
- The final digit must be even
- The sum of all the digits must be greater than 16
- The following credit card numbers are valid:

```markdown
a92332119c011112 (invalid characters)
4444444444444444 (only one type of number)
1111111111111110 (sum less than 16)
6666666666666661 (odd final number)
```
*/