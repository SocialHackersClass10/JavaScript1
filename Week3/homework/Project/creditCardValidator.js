
let cardNum='0211111111111112';

checkCardParameters(cardNum);

function checkCardParameters(item){
    // let strItem=item.toString();
    for (let i=0; i<item.toString().length;i++){
        var numb=item[i];
        numb=Number.parseInt(numb); //changes the strings to numbers
    }
    var numArray=item.toString().split('') ;

    if (item.toString().length===16){ //by this condition we check that the number is only 16 digit long
        let count = 0;
        let sumD=0;
        for (var i=0; i<item.toString().length;i++){
        // all the digits cannot be the same
            if (numArray[0]===numArray[i]){
                count++;
            }            
            if (count===16){
                console.log("Revise! All of the digits cannot be the same")
            }
            sumD+= Number(numArray[i]);            
        }
        if (sumD<=16){
            console.log("The sum of all the digits must be greater than 16")
        }        
        //The final digit must be even
        if (numArray[15] % 2 == true){
            console.log("The last digit should be even number")
        };
    }   else  {
        console.log("You should insert a 16-digit number")
    }
}

