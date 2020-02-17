'use strict';

  let mealRecipe = { //1
	title : "Toast",  //2*
	servings : 1,
	ingredients : ["\ncheese: 2" , "\ntomato: 2" , "\nham: 2" , "\negg: 1"] //*2
};

for (const recipe in mealRecipe) {  //3*
	console.log(`${recipe}:${mealRecipe[recipe]}`);
}; //*3

/*
1. Declare a variable that holds an object (your meal recipe).
2. Give the object 3 properties: a `title` (string), a `servings` (number) and an `ingredients` (array of strings) property.
3. Log each property out seperately, using a loop (for, while or do/while)
*/