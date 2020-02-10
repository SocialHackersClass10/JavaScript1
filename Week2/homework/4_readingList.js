'use strict'
/*Keep track of which books you read and which books you want to read!
Declare a variable that holds an array of 3 objects, where each object describes a book and 
has properties for the title (string), author (string), and alreadyRead (boolean indicating if you read it yet).*/
const lord_of_the_rings={
    title:"The Fellowship of the Ring",
    author:"J. R. R. Tolkien",
    alreadyRead:false
}
const game_of_thrones={
    title:"A Song of Ice and Fire",
    author:"George R. R. Martin",
    alreadyRead:true
}
const harry_potter={
    title:"The Philosopher's Stone",
    author:"J. K. Rowling",
    alreadyRead:true
}
//Loop through the array of books.
var myBooks=[lord_of_the_rings,game_of_thrones,harry_potter];

myBooks.forEach(item=> console.log(item));

//For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
myBooks.forEach(item=> {
    return console.log(item.title + " by " + item.author+ "\n");
});

/*Create a conditional statement to change the log depending on whether you read it yet or not. 
If you read it, log a string like You already read "The Hobbit" right after the log of the book details
If you haven't read it log a string like You still need to read "The Lord of the Rings"*/
for (let item of myBooks){
    if (item.alreadyRead == true){

    console.log("You already read: " + item.title + "\n");
}else{
    console.log("You still nead to read: "+ item.title + "\n");
}
}