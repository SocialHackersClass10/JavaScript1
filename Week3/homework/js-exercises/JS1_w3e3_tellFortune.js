'use strict';

const numChildren = [2, 4, 6, 5, 12]; //2*
const partnerNames = ["Maria","Giota","Christina","Kostantina","Kaliopi"];
const locations = ["Greece","Italy","Africa","America","Russia"];
const jobs = ["programmer","chef","electrician","engineer","lawyer"]; //*2

function tellFortune(childrenCount,partnersName,location,jobTitle){ //1a
    childrenCount = Math.floor(Math.random() * numChildren.length); //1b*
    partnersName = Math.floor(Math.random() * partnerNames.length);
    location = Math.floor(Math.random() * locations.length);
    jobTitle = Math.floor(Math.random() * jobs.length); //*1b

    return (`You will be a ${jobs[jobTitle]} in ${locations[location]}, and married to ${partnerNames[partnersName]} with ${numChildren[childrenCount]} kids.`); //1c
}

console.log(tellFortune()); //3



/*
1. Write a function named `tellFortune`.

- It takes 4 arguments: number of children (number), partner's name (string), geographic location (string), job title (string).
- Randomly select values from the arrays.
- Return a string: "You will be a [JOB_TITLE] in [LOCATION], and married to [PARTNER_NAME] with [NUMBER_KIDS] kids."

2. Create 4 arrays, `numChildren`, `partnerNames`, `locations` and `jobs`. Give each array 5 random values that make sense
3. Call the function 1 time, by passing the arrays as the argument.
*/