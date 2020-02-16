'use strict';
let giveCompliment = (name) => {
 let compliment = ["awesome",
  "smart",
  "strong",
  "funny",
  "brave",
  "good",
  "nice",
  "great",
 ];
 let random = compliment[Math.floor(Math.random() * compliment.length)];
 console.log(`You are ${random},${name}`);
}
giveCompliment("manwlis");
giveCompliment("manwlis");
giveCompliment("manwlis");