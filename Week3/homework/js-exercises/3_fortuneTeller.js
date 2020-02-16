'use strict'
//Why pay a fortune teller when you can just program your fortune yourself?
/*1. Write a function named `tellFortune`.
- It takes 4 arguments: number of children (number), partner's name (string), geographic location (string), job title (string).
- Randomly select values from the arrays.
- Return a string: "You will be a [JOB_TITLE] in [LOCATION], and married to [PARTNER_NAME] with [NUMBER_KIDS] kids."
2. Create 4 arrays, `numChildren`, `partnerNames`, `locations` and `jobs`. Give each array 5 random values that make sense*/

let partnerNames=[
    "Maria",
    "Anna",
    "Jeniffer",
    "Penelope",
    "Eleftheria"];
    
let locations=[
    "Athens",
    "New York",
    "Tokyo",
    "Berlin"];
    
let jobs=[
    "doctor",
    "lawer",
    "police-officer",
    "electrician",
    "farmer"];

function tellFortune(randomJobs,randomLocations,randomPartner,numChildren){

    numChildren=[getRandomInt(5)];
    function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
    randomPartner = partnerNames[Math.floor(Math.random() * partnerNames.length)];
    randomLocations = locations[Math.floor(Math.random() * locations.length)];
    randomJobs = jobs[Math.floor(Math.random() * jobs.length)];

    return(`You will be a ${randomJobs} in ${randomLocations}, and married to ${randomPartner} with ${numChildren} kids.`)
}

//3. Call the function 1 time, by passing the arrays as the argument.*/
console.log(tellFortune())