'use strict'
let mealRecipt = {
    meal: 'omelete',
    serves: 5,
    ingredients: [
        "4 eggs", 
        "2 strips of bacon", 
        "tsp salt/pepper"
    ]
};

for (var key of Object.keys(mealRecipt)) {
    console.log(key + ": " + mealRecipt[key])
}
