'use strict'


let drinkTray = new Array(5); //1
const drinkTypes = [" cola", " lemonade", " water"]; //1
let j=0;


for(let i=0; i<drinkTray.length; i++){ //2
    drinkTray[i] = drinkTypes[Math.floor(Math.random() * drinkTypes.length)]; //?3,4?
}

console.log("Hey guys, I brought a" + drinkTray.join()); //5

/*
You're at a party and you feel thirsty! However, you've got 5 friends who are also in need of a drink. Let's go get them a drink.
1. Declare a variable that holds an empty array, called `drinkTray`.
There are 3 different types of drinks:

```js
const drinkTypes = ["cola", "lemonade", "water"];
```

2. Create a loop that runs 5 times. On each iteration, push a drink into the `drinkTray` variable. The `drinkTray` can only hold at most two instances of the same drink type, for example it can only hold 2 colas, 2 lemonades, 2 waters.
3. If there are already two instances of a `drinkType` then start with the next drink in the array.
4. Your `drinkTray` should contain 2 cola, 2 lemonade and 1 water.
5. Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!" (For example: "Hey guys, I brought a cola, cola, lemonade, lemonade, water!")*/