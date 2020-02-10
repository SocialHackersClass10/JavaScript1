'use strict'
/*Ever wondered how to make a certain meal? Let's create a recipe list with JavaScript!
Declare a variable that holds an object (your meal recipe).*/
//Give the object 3 properties: a title (string), a servings (number) and an ingredients (array of strings) property.
const tost={
    Title:"Tost",
    Servings:1,
    Ingredients:["Slices of bread","cheese","ham","tomato"]
}
//Log each property out seperately, using a loop (for, while or do/while)

let recipe=[tost]

for (let i of recipe){
    console.log("Title: "+i.Title);
    console.log("Servings: "+i.Servings);
    console.log("Ingredients: "+"\n"+i.Ingredients[0]+"\n"+i.Ingredients[1]+"\n"+i.Ingredients[2]+"\n"+i.Ingredients[3]);
}
