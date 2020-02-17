'use strict';

let books = [{title: "The Hobbit", author:"J.R.R. Tolkien", alreadyRead: false}, //1*
             {title: "The Lord of the Rings", author:"J.R.R. Tolkien", alreadyRead: false},
             {title: "The Fellowship of the Ring", author:"J.R.R. Tolkien", alreadyRead: true}
            ]; //*1


for(let i=0; i<books.length; i++){ //2
    console.log(`${books[i].title}`+" by "+`${books[i].author}`); //3
    if (`${books[i].alreadyRead}` == 'true') console.log ("You already read " + "'" + books[i].title +"'\n"); //4   
    else console.log ("You still need to read " + "'" + books[i].title +"'\n"); //5
};

/*
1. Declare a variable that holds an array of 3 objects, where each object describes a book and has properties for the `title` (string), `author` (string), and `alreadyRead` (boolean indicating if you read it yet).
2. Loop through the array of books.
3. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
4. Create a conditional statement to change the log depending on whether you read it yet or not. If you read it, log a string like `You already read "The Hobbit"` right after the log of the book details
5. If you haven't read it log a string like `You still need to read "The Lord of the Rings"`
*/