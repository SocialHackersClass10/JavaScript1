'use strict'

let commars = "hello,this,is,a,difficult,to,read,sentence";
console.log(commars.length);

let removeCommars = commars.split(',').join(""); //replace(/,/g, ''); 
console.log(removeCommars);    



/*for(let i = 0; i<=20; i++);{
    if (i === 0);{
        console.log(i +  ' is even');
        }
        else if (1 % 2 === 0);{
            console.log(i + ' is even');
        }
        else {
            console.log(i + ' is odd');
        }
}

*/