'use strict'

/*
    description     Exercise with array of objects
*/

function runExercise04 () {
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-1 - week 2 - Exercise 04");
    console.log("Array of objects");
    console.log("- - - - - - - - - - - - - - - - - - - -");
    let myBookList = [
        { bookTitle:'Nineteen Eighty-Four',   bookAuthor:'George Orwell',     readPending:false },
        { bookTitle:'The Silmarillion',       bookAuthor:'J. R. R. Tolkien',  readPending:true  },
        { bookTitle:'The Name of the Rose',   bookAuthor:'Umberto Eco',       readPending:false }
    ];
    console.log(`I own ${myBookList.length} books.`);
    for(let i=0;i<myBookList.length;i++){
        console.log((myBookList[i].readPending?"I still need to read":"I have already read")
                    +` "${myBookList[i].bookTitle}" by "${myBookList[i].bookAuthor}".`);
    }
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};

runExercise04();

