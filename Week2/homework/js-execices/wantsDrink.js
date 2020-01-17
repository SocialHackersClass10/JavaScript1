'use strict'
let  drinkTray = [];
const  drinkTypes  =  [ "cola" ,  "limonade" ,  "eau" ];
let y=1 ;
drinkTypes.forEach(function(element){
    let x=1;
    do{
        drinkTray.push(element); x++; y++;
    }while((x<=2) && (y<5));
});
let drinkGay="Hey guys, I brought a "; y=1;
drinkTray.forEach(function(element){
    if (y<drinkTray.length){
        drinkGay+=element+", a "; y++;
    }else{ drinkGay+=element}
});
console.log(drinkGay)
