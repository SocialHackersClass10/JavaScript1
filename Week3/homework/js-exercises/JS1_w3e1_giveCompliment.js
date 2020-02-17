'use strict';

function giveCompliment(yourname){ //1
    
    const compliments = ["great","awesome","hacker","fast","strong","smart","clever","programmer","hired","powerful"]; //1a
    let rand = Math.floor(Math.random() * compliments.length); //1b
    console.log(`You are ${compliments[rand]}, ${yourname}!`); //1c
}

giveCompliment("George"); //2*
giveCompliment("George");
giveCompliment("George"); //*2

/*
1. Write a function named `giveCompliment`

- It takes 1 argument: your name
- Inside the function create an array with 10 strings. Each string should be a compliment, like `"great"`, `"awesome"`
- Write logic that randomly selects a compliment
- Return a string: "You are [COMPLIMENT], [YOUR_NAME]!

2. Call the function three times, giving each function call the same argument: your name.
*/