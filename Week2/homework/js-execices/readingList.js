'use strict'
var mesLivres=[
    {
        title:"Les Crapauds-brousse",
        author:"Tierno Monénembo",
        alreadyRead:true,
    }, 
    {
        title: "La Révolte des bovidés",
        author: "Amadou Hampâté Bâ",
        alreadyRead: true,
    }, 
    {
        title: "Hosties noires",
        author: "Léopold Sédar Senghor",
        alreadyRead: false,
    }

]
for (let livreX of mesLivres ) {
    console.log(livreX.title+" of "+livreX.author)
    if(livreX.alreadyRead){
        console.log("You already read : "+livreX.title+"\n")
    }else{ console.log("You still need to read : "+livreX.title+"\n")}
}
