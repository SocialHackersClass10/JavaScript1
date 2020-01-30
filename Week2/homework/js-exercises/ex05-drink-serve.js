'use strict'

/*
    description     exercise with array element manipulation
*/

function runExercise05 () {
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-1 - week 2 - Exercise 05");
    console.log("Array element manipulation");
    console.log("- - - - - - - - - - - - - - - - - - - -");
    function countArrayElementsByValue(paramArray,paramValue){
        /*
        alternate code, but resource-heavy when used on large arrays, since it creates a new array
        return paramArray.filter(filterArrayElement=>filterArrayElement===paramValue).length;
        */
        let i=1+paramArray.indexOf(paramValue);
        if (i===0) {return 0};
        let fncResult=1;
        for (;i<paramArray.length;i++){if(paramArray[i]===paramValue){fncResult++}};
        return fncResult;
    }
    const drinkTypes=["cola","lemonade","water"];
    let nextDrinkTypeIndex=0;
    let drinkTray=[];
    for(let i=0;i<5;i++){
        if (countArrayElementsByValue(drinkTray,drinkTypes[nextDrinkTypeIndex])>1)
            {nextDrinkTypeIndex++};
        drinkTray.push(drinkTypes[nextDrinkTypeIndex]);
    }
    console.log(`Hey guys, I brought a ${drinkTray}`);
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};

runExercise05();

