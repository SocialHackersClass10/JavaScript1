"use strict";

let myRecipe = {
    Mealname : "kokinisto" ,
    Serves : "2" ,
    Ingredients : ["iliko1", "iliko2", "iliko3" , "iliko4"]
}
    let entries = Object.entries(myRecipe);// metatropi se array

        for( let[myRecipe , count] of entries) {
            console.log(myRecipe +":" +  " " + count );
        }

//aporia pws na kanw ta ilika na fenonte to ena katw apo to alo
//iparxi pio aplos tropos na ginei auth h askisi?
