'use strict'
function tellFortune(nbChild, partName, locGeog, workName){
    console.log("You will be a "+workName+" in "+locGeog+", and married to "+partName+" with "+nbChild+" kids.");
}
let childTab=[0, 1, 2, 3, 4];
let partenerTab=["Binta", "Idiatou", "Djenabou", "Kadiatou", "Mariama"];
let geogTab=["Daresalam 1", "Hamdalaye 1", "Hafia 2", "Cimenterie", "Kamsar"];
let jobTab=["Programmar", "Mecanician", "Nurse", "Commercant", "Economist"];
tellFortune(childTab[Math.floor(Math.random() * 5)], partenerTab[Math.floor(Math.random() * 5)], geogTab[Math.floor(Math.random() * 5)], jobTab[Math.floor(Math.random() * 5)]);