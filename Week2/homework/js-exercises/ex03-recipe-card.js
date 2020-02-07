'use strict'

/*
    description     exercise with basic object declaration and properties logging
*/

function runExercise03 () {
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-1 - week 2 - Exercise 03");
    console.log("Basic object declaration and console log its properties");
    console.log("- - - - - - - - - - - - - - - - - - - -");
    let myRecipe = {    title       : "Special Feta Omelet",
                        servings    : 2,
                        ingredients : [ '4 large eggs',
                                        '1/2 tablespoon milk',
                                        '1/4 teaspoon dried basil',
                                        '1/4 teaspoon dried oregano',
                                        'Dash salt & pepper',
                                        '1 tablespoon butter',
                                        '1/2 cup crumbled feta cheese',
                                        '1 plum tomato, chopped',
                                        '2 teaspoons balsamic vinaigrette']     };
    console.log(`Meal name: ${myRecipe.title}`);
    console.log(`Serves: ${myRecipe.servings}`);
    console.log(`Ingredients:`);
    let x;
    for (x of myRecipe.ingredients) {console.log(x)};
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};

runExercise03();

