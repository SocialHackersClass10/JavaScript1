'use strict'

/*
    description     PROJECT: Validate the number of a credit card based on specified ruleset
*/

function runProjectccNumberValidator() {
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-1 - week 3 - PROJECT: Credit card number Validation");
    console.log("Validate the number of a credit card based on specified ruleset");
    console.log("- - - - - - - - - - - - - - - - - - - -");
    //
    //  define the Credit card number validation routine
    //
    function isValidccNumber(ccNumber){
                        //  transform to string and remove non-numeric characters
        let ccNumStr=String(ccNumber).replace(/[^0-9]/g,'');
                        //  put each character into an array element
        let ccDigits=ccNumStr.split('');
                        //  decide validity based on specified ruleset
        return (ccNumStr.length==16)
            && (ccNumStr.replace((new RegExp(ccNumStr[0],'g')),'').length>0)
            && ((ccNumStr[15]%2)==0)
            && (ccDigits.reduce((a,b)=>Number(a)+Number(b))>16);
    }
    let ccNumberList=[ '9999777788880000','6666666666661666',' 1234 - 5678 - 9012 - 3456 ',
                       'a92332119c011112','4444444444444444',
                       '1111111111111110','6666666666666661',' 6543 - 2109 - 8765 - 4321 ' ];
    for (let i=0; i<ccNumberList.length; i++){
        console.log(`Based on the provided rulset, the Credit card number [${
                    ccNumberList[i]}] ${(isValidccNumber(ccNumberList[i])?'IS':'is NOT')} valid.`);
    }
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};

runProjectccNumberValidator();

