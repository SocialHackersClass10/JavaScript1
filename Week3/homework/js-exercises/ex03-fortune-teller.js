'use strict'

/*
    description     exercise with array parameters & rng
*/

function runExercise03 () {
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-1 - week 3 - Exercise 03 - Fortune teller");
    console.log("Array parameters & random element selection");
    console.log("- - - - - - - - - - - - - - - - - - - -");
    function tellFortune(listJobs,listCities,listSpouceNames,listChildren){
        function spliceRandomValue(anArray){
                    return anArray.splice(Math.floor(Math.random()*anArray.length),1)};
        function addPrefix(paramValue){
                    return ('aeioy'.indexOf(paramValue.toString()[0].toLowerCase())<0?"a ":"an ")+paramValue};
        let childNum=spliceRandomValue(listChildren);
        let childrenText=(childNum<1?"without children":"with "
                                    +(childNum==1?"one child":`${childNum} kids`));
        return `You will be ${addPrefix(spliceRandomValue(listJobs))}`
                +` living in ${spliceRandomValue(listCities)}`
                +`, married to ${addPrefix(spliceRandomValue(listJobs))}`
                +` named ${spliceRandomValue(listSpouceNames)} ${childrenText}.`;
    }
    let funnyJobsList=['Chocolate Beer Wrestler Administrator','Cat Editor Behavior Consultant'
                        ,'Unicorn Division Chief Farmer','Belly Dance Ninja Poet'
                        ,'Bride Kidnapping Master Carpenter','Web Snake Developer-Milker'
                        ,'Sub-Commitment Under-Secretary','Master Handshake Broker'
                        ,'Water Slide Toast Tester','Professional Sleeper Pilot'
                        ,'Inspiration Office Rider','Beverage Dissemination Officer Agent'
                        ,'Digital Prophet Boxer','Galactic Research Viceroy of Excellence'
                        ,'Space Travel Agent-Burglar','Chief Troublemaker Commando'
                        ,'In-house Zoologist-Philosopher','Shadow Accounting Dancer'
                        ,'Electrician-Gynecologist','Computer Speech Accountant'
                        ,'Occupational Hazard Engineer','Hunter-Seeker Epidemiologist'];
    let locationNames=['Dublin','Bruges','Porto','Berlin','Zagre','Marseille','Stockholm'
                            ,'Athens','Oslo','Bratislava','Frankfurt','Amsterdam'];
    let partnerNames=['Luisa','Gema','Sandra','Alba','Ariadne','Rosa'
                            ,'Rebeca','Sonia','Kate','Nastasje','Eva'];
    let numChildren=[0,1,2,3,0,1,2,3,0,1,2,1];
    for (let i=0; i<10; i++)
        {console.log(tellFortune(funnyJobsList,locationNames,partnerNames,numChildren))};
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};

runExercise03();

