'use strict'

function tellFortune() {
    let childrensNum = [0, 2, 5, 6, 9];
    let partnersNames = ["Isha", "mariam", "kumbis", "katrina", "sun shine"];
    let locations = ["Ottawa", "London", "New York", "California", "Barcelona"];
    let jobTitle = ["web programmer", "professional web developer", "football player"];

    let babyNames = childrensNum[Math.floor(Math.random()*childrensNum.length)];
    let favPartners = partnersNames[Math.floor(Math.random()*partnersNames.length)];
    let bestLocations = locations[Math.floor(Math.random()*locations.length)];
    let dreamJob = jobTitle[Math.floor(Math.random()*jobTitle.length)];

    return(`You will be a ${dreamJob}, in ${bestLocations}, and married to ${partnersNames}, with ${childrensNum} kids.`);
};
console.log(tellFortune);
