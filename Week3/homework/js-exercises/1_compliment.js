'use strict'

//1. Write a function named `giveCompliment`
    function giveCompliment(name){

/*- It takes 1 argument: your name
- Inside the function create an array with 10 strings. Each string should be a compliment, like `"great"`, `"awesome"`
- Write logic that randomly selects a compliment
- Return a string: "You are [COMPLIMENT], [YOUR_NAME]!*/

        let compliment=["great","good","awesome","the best","excellent","superb","amazing","flawless","victorious","the man"];
        const randomCompliment = compliment[Math.floor(Math.random() * compliment.length)];
        return console.log(`You are ${randomCompliment},${name}!`)
    }
//2. Call the function three times, giving each function call the same argument: your name.
    for(let i=0; i<3; i++){
    giveCompliment("Kiriako")
    }



