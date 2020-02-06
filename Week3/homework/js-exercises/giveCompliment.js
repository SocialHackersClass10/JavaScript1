'use strict'

// function giveCompliment(mamAliJallow) {
//     let me = ["great", "awesome", "smart", "strong", "theProudOne","charming", "oneOfAKind", "brave", "courageous", "theFavouride"];
//     let myName = me[Math.floor(math.random()*me.length)];
// };
// for(let i = 0; i < 10; i++) {
//     console.log("YOU ARE"[me],[mamAliJallow]);
// };

function giveCompliment(Jallow) {
    let array = ["great", "awesome", "smart", "strong", "the proud one","charming", "one of a kind", "brave", "courageous", "the favouride"];

    let comps = array[Math.floor(Math.random()*array.length)];

    return `You are ${comps}, ${Jallow}!`;
    //return("You are " + " "+array[Math.floor(Math.random() * array.length)]);
    
}
console.log(giveCompliment("Jallow"));
console.log(giveCompliment("jallow"));
console.log(giveCompliment("jallow"));
console.log(giveCompliment("jallow"));