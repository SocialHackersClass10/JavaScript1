'use strict'

/*
    description     exercise with aggregate (total sum calculation) of object property values
*/

function runExercise05 () {
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-1 - week 3 - Exercise 05 - Total cost of Party shopping - Print the receipt");
    console.log("Aggregate (total sum calculation) of object property values");
    console.log("- - - - - - - - - - - - - - - - - - - -");
    function printReceipt(itemList){
        function printReceiptLine(lineText){console.log(' '.repeat(20)+'|'+lineText+'|')};
        const receiptWidth=30;
        function formatLine(leftText,rightText,doCenter){
            let funcResult=`  ${leftText+rightText}  `;
            while (funcResult.length<receiptWidth){
                funcResult=(doCenter?' '+funcResult+' ':funcResult.substr(0,leftText.length+2)
                                                        +' '+funcResult.substr(leftText.length+2));
            }
            return funcResult.substr(0,receiptWidth);
        }
        printReceiptLine('='.repeat(receiptWidth));
        printReceiptLine(formatLine('Cash Register Receipt','',true));
        printReceiptLine('='.repeat(receiptWidth));
        printReceiptLine(formatLine('Product','Price',false));
        printReceiptLine('-'.repeat(receiptWidth));
        let valueList=Object.values(itemList);
        let descrList=Object.keys(itemList);
        let totalSum=0;
        for (let i=0; i<valueList.length; i++) {
            printReceiptLine(formatLine(descrList[i],valueList[i],false));
            totalSum+=valueList[i];
        }
        printReceiptLine('-'.repeat(receiptWidth));
        printReceiptLine(formatLine('Total cost',(Math.round(totalSum*100)/100),false));
        printReceiptLine('='.repeat(receiptWidth));
    }
    let cartForParty={ beer:12.99, chips:5.45, tequila:32.12, crackers:3.63, soda:5.89 };
    console.log('For your party you filled a shopping cart with the following items:');
    console.log(cartForParty);
    console.log('And here is the bill you have to pay:');
    printReceipt(cartForParty);
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};

runExercise05();

