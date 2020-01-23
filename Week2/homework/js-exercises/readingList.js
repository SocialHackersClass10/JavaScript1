"use strict";

let books = [{
    title : "Where the Crawdads Sing",
    author : "Delia Owens",
    alreadyRead : true 
},
{
    title : "The Last Wish",
    author : "Andrzej Sapkowski",
    alreadyRead : true 
},
{
    title : "This is Going to Hurt",
    author : "Adam Kay",
    alreadyRead : false 
}
]
for( let x  of books ) {
    console.log(x.title+ " by " + x.author);
    if (x.alreadyRead === true){
        console.log("You already read " + x.title);
    }
        else {
            console.log("You still need to read " + x.title);
        }
    }

