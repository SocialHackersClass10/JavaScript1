"use strict";
let myMealRecipe = {
    title : "Brunch",
    servings : 4,
    ingredients : ["eggs","bacon","cake","milk","orange juice"]
}
for (let key in myMealRecipe){
    if (myMealRecipe[key] == myMealRecipe.title){ 
        console.log("Meal Name: " + myMealRecipe[key])
    }else if (myMealRecipe[key] == myMealRecipe.servings){
        console.log("Serves: " + myMealRecipe[key])
    }else {
        console.log("Ingredients:");
        for (let i = 0; i < myMealRecipe.ingredients.length; i++){
            console.log(myMealRecipe[key][i]);
        }
    }
}
