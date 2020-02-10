// ----------------Exercise 1: You are amazing, Noer!----------
function giveCompliment(name){
    let compArray=['great', 'awesome', 'outstanding',
    'considerable','magnificent','prominent','enthusiastic',
    'absolute','powerful','enjoyable'];
    var randComp= compArray[Math.floor(Math.random() * compArray.length)];
    return console.log(`You are ${randComp}, ${name}`)
}
giveCompliment("Efthymis");
giveCompliment("Efthymis");
giveCompliment("Efthymis");

// ----------------Exercise 2: Dog years------------------

function calculateDogAge(age){
    dogAge=Math.round(age/7);
    // fixedDogAge=dogAge.toFixed(1);
    return console.log(`Your doggie is ${dogAge} years old in dog years`)
}

calculateDogAge(9);
calculateDogAge(29);
calculateDogAge(47);

// ----------------Exercise 3: Be your own fortune teller------------------
function tellFortune(childrenQuantity, partner,place,jobTitle){

    var randChildren=numChildren[Math.floor(Math.random() * numChildren.length)];
    var randPartNames=partnerNames[Math.floor(Math.random() * partnerNames.length)];
    var randLocations=locations[Math.floor(Math.random() * locations.length)];
    var randJobs=jobs[Math.floor(Math.random() * jobs.length)];

    return console.log(`You will be a ${randJobs} in ${randLocations}, and married to ${randPartNames} with ${randChildren} kids.`)
}
let numChildren=[2, 4, 3, 1, 5];
let partnerNames=["John", "George", "Mike", "Remi", "Eddie"];
let locations =["Athens", "Volos", "Chania","Patra", "Corfu"];
let jobs=["technician", "software engineer", "plumber", "doctor", "waiter"];

tellFortune(numChildren,partnerNames,locations,jobs);

// ----------------Exercise 4: Shopping at the supermarket------------------

function addToShoppingCart(item){
    // let cartArray=[];
    cartArray.push(item);
    if (cartArray.length>3){
        cartArray.shift();
    }
    console.log(`You bought ${cartArray}!`)
}
let cartArray=["bananas","milk"];
addToShoppingCart("yoghurt");
addToShoppingCart("rice");
addToShoppingCart("ham");

// ----------------Exercise 5: Total cost is... ------------------

function calculateTotalPrice(objectsCart){
    let sum=0;
    for (const value in objectsCart){
        sum += objectsCart[value];    
    }
    console.log(`Total cost is ${sum.toFixed(2)}.`);
}

cartForParty={beers:1.75, chips:0.99, wine:5, nachos:1.5, vodka:12}
calculateTotalPrice(cartForParty);