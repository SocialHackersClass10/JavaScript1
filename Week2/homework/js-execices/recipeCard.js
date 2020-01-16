'use strict'
var maRecette={
        name: "Omelete",
        serves: 2,
        ingredients: ["4 eggs", "2 strips of bacon", "tsp salt/pepper" ]
}
console.log("My meal name is: " +maRecette.name+" \nServes : "+maRecette.serves);
let ingr="Ingredients :\n"
for(var x of maRecette.ingredients ){
    ingr+=x+"\n";
}
console.log(ingr);