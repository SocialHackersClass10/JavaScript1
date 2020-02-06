'use strict'

'use strict'

let books = [{
    title : "fifty shades of grey",
    author : "E. L. James",
    alreadyRead : true 
},
{
    title : "Safe, Strong, and Streetwise",
    author : "Helen Benedict columbia",
    alreadyRead : true 
},
{
    title : "The Opposite of Love ",
    author : "Helen Benedict columbia",
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