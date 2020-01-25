//-----------Exercise 1: Remove the comma--------------
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length);
var noCommasString = myString.split(',').join(" ");
myString=noCommasString;
console.log(myString);

//-----------Exercise 2: The even/odd reporter--------------
for (var num=0; num<20; num++){
    if (num % 2==0) {
        console.log("The number "+ num + " is even!")
    }
    if (num % 2!==0){    
        console.log("The number "+ num + " is odd!")
    }
}

//-----------Exercise 3: The recipe card--------------
let recipe={Meal_name: "Omelete", Serves: 2, 
Ingredients: ["4 eggs", "2 strips of bacon", "1 tsp salt/pepper"]};

for (name in recipe){
    if (name=="Ingredients"){
    console.log("Ingredients:");
    } else {
    console.log(name +": " + recipe[name]);
    }
}

for (j=0; j<3;j++){
    console.log(recipe.Ingredients[j]);
}

//-----------Exercise 4: The reading list--------------
let bookArray=[{ title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead:true},
{title: "The Lord of the Rings", author: "J.R.R. Tolkien", alreadyRead:false},
{title: "The Last of the Mohicans", author: "J.F. Cooper", alreadyRead:true}];

bookArray.forEach(function(element){console.log(element.title + " by " + element.author)});
    
bookArray.forEach(function(element){
    if (element.alreadyRead==true){
        console.log("You already read " + element.title)
    } else {
        console.log("You still need to read " + element.title)
    }    
});

//-----------Exercise 5: Who wants a drink?--------------

var drinkTray=[];
const drinkTypes = ["cola", "lemonade", "water"];
for (i=0;i<5;i++){    
   for (j=0;j<drinkTypes.length; j++){
       drinkTray.push(drinkTypes[j])
       if (drinkTray.length===5){
           console.log( "Hey guys, I brought a "+ drinkTray.sort() +"!")  
           break;
        }
    }   
}


