'use strict'

/*
    description     PROJECT: Validate the number of a credit card based on specified ruleset
                    code revision #6
*/

function runProjectccNumberValidator() {

        //  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
        //                                                              original submitted solution
        //  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
        //    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
        //    console.log("JS-1 - week 3 - PROJECT: Credit card number Validation");
        //    console.log("Validate the number of a credit card based on specified ruleset");
        //    console.log("- - - - - - - - - - - - - - - - - - - -");
        //    //
        //    //  define the Credit card number validation routine
        //    //
        //    function isValidccNumber(ccNumber){
        //                        //  transform to string and remove non-numeric characters
        //        let ccNumStr=String(ccNumber).replace(/[^0-9]/g,'');
        //                        //  put each character into an array element
        //        let ccDigits=ccNumStr.split('');
        //                        //  decide validity based on specified ruleset
        //        return (ccNumStr.length==16)
        //            && (ccNumStr.replace((new RegExp(ccNumStr[0],'g')),'').length>0)
        //            && ((ccNumStr[15]%2)==0)
        //            && (ccDigits.reduce((a,b)=>Number(a)+Number(b))>16);
        //    }
        //    let ccNumberList=[ '9999777788880000','6666666666661666',' 1234 - 5678 - 9012 - 3456 ',
        //                       'a92332119c011112','4444444444444444',
        //                       '1111111111111110','6666666666666661',' 6543 - 2109 - 8765 - 4321 ' ];
        //    for (let i=0; i<ccNumberList.length; i++){
        //        console.log(`Based on the provided rulset, the Credit card number [${
        //                    ccNumberList[i]}] ${(isValidccNumber(ccNumberList[i])?'IS':'is NOT')} valid.`);
        //    }
        //  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =


        //  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
        //               alternate solution with detailed reporting and complete ruleset evaluation
        //  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
        //    function isValidccNumber(ccNumber){
        //                        //  transform into string and remove all spaces
        //        let ccNumStr=String(ccNumber).replace(/\s+/g,'');
        //                        //  define validity ruleset based on specifications
        //        let ruleset={
        //            is_exactly_16_digits_long     :(ccNumStr.length==16),
        //            contains_only_numeric_digits  :(ccNumStr===String(ccNumber).replace(/[^0-9]/g,'')),
        //            not_all_the_digits_are_same   :(ccNumStr.replace((new RegExp(ccNumStr[0],'g')),'').length>0),
        //            last_digit_is_even            :(ccNumStr[ccNumStr.length-1]%2==0),
        //            digit_checksum_greater_than_16:(ccNumStr.split('').reduce((a,b)=>Number(a)+Number(b))>16),
        //        };
        //        console.log(" ");
        //        console.log(`Checking the validity of Credit card number [${ccNumber}] -> [${ccNumStr}]`);
        //        let fResult=true;
        //        Object.keys(ruleset).forEach(keyName=>{
        //                        //  detailed log of functionality
        //            console.log(`    ${keyName.replace(/_+/g,' ')}${' '.repeat(
        //                            35-keyName.length)}[${ruleset[keyName]}]`);
        //                        //  decide validity based on specified ruleset
        //            fResult=fResult&&ruleset[keyName];
        //        });
        //        return fResult;
        //    }
        //    [ '9999777788880000',6666666666661666,' 1234 - 5678 - 9012 - 3456 ',' 1234 5678  9012 3456 ',
        //                         'a92332119c011112','4444444444444444',' a6543 b2109 c8765 d1234 ',
        //                         '1111111111111110',6666666666666661,' 6543 - 2109 - 8765 - 4321 ' ]
        //    .forEach(lmnt=>console.log(`Based on the provided rulset, the Credit card number [${
        //                    lmnt}] ${(isValidccNumber(lmnt)?'IS':'is NOT')} valid.`));
        //  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =


        //  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
        //                alternate solution with detailed reporting and partial ruleset evaluation
        //  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
        //    function isValidccNumber(ccNumber){
        //                        //  transform into string and remove all spaces
        //        let ccNumStr=String(ccNumber).replace(/\s+/g,'');
        //                        //  define validity ruleset based on specifications
        //        let ruleset={
        //            is_exactly_16_digits_long     :(ccNumStr.length==16),
        //            contains_only_numeric_digits  :(ccNumStr===String(ccNumber).replace(/[^0-9]/g,'')),
        //            not_all_the_digits_are_same   :(ccNumStr.replace((new RegExp(ccNumStr[0],'g')),'').length>0),
        //            last_digit_is_even            :(ccNumStr[ccNumStr.length-1]%2==0),
        //            digit_checksum_greater_than_16:(ccNumStr.split('').reduce((a,b)=>Number(a)+Number(b))>16),
        //        };
        //        console.log(" ");
        //        console.log(`Checking the validity of Credit card number [${ccNumber}] -> [${ccNumStr}]`);
        //        return Object.keys(ruleset).every(keyName=>{
        //                        //  detailed log of functionality
        //            console.log(`    ${keyName.replace(/_+/g,' ')}${' '.repeat(
        //                            35-keyName.length)}[${ruleset[keyName]}]`);
        //                        //  decide validity based on specified ruleset
        //            return ruleset[keyName];
        //        });
        //    }
        //    [ '9999777788880000',6666666666661666,' 1234 - 5678 - 9012 - 3456 ',' 1234 5678  9012 3456 ',
        //                         'a92332119c011112','4444444444444444',' a6543 b2109 c8765 d1234 ',
        //                         '1111111111111110',6666666666666661,' 6543 - 2109 - 8765 - 4321 ' ]
        //    .forEach(lmnt=>console.log(`Based on the provided rulset, the Credit card number [${
        //                    lmnt}] ${(isValidccNumber(lmnt)?'IS':'is NOT')} valid.`));
        //  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =


        //  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
        //  replaced with following alternative validation method + alternative data setup & calling
        //  evaluation is still partial, meaning at the 1st invalid step the number is ruled invalid
        //  this is code revision #4
        //  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
        //
        //    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
        //    console.log("JS-1 - week 3 - PROJECT: Credit card number Validation");
        //    console.log("Validate the number of a credit card based on specified ruleset");
        //    console.log("- - - - - - - - - - - - - - - - - - - -");
        //    //
        //    //  define the Credit card number validation routine
        //    //
        //    function isValidccNumber(ccNumber){
        //                        //  transform into string and remove all spaces
        //        let ccNumStr=String(ccNumber).replace(/\s+/g,'');
        //                        //  define validity ruleset - based on specifications
        //        let ruleset={
        //            ccnumber_is_exactly_16_digits_long
        //                :(ccNumStr.length==16),
        //            contains_only_numeric_digits
        //                :(ccNumStr===String(ccNumber).replace(/[^0-9]/g,'')),
        //            not_all_the_digits_are_same
        //                :(ccNumStr.replace((new RegExp(ccNumStr[0],'g')),'').length>0),
        //            the_last_digit_is_even
        //                :(ccNumStr[ccNumStr.length-1]%2==0),
        //            has_checksum_greater_than_16
        //                :(ccNumStr.split('').reduce((a,b)=>Number(a)+Number(b))>16),
        //        };
        //                        //  decide and return validity - based on specified ruleset
        //        return Object.keys(ruleset).every(keyName=>ruleset[keyName]});
        //    }
        //    //
        //    //  call the function to validate each credit card number from the following array
        //    //
        //    [   '9999777788880000',              6666666666661666,  ' 1234 5678  9012 3456 ',
        //        ' 1234 - 5678 - 9012 - 3456 ',  'a92332119c011112', '4444444444444444',
        //        ' a6543 b2109 c8765 d1234 ',    '1111111111111110',  6666666666666661,
        //    ].forEach(lmnt=>console.log(`Based on the provided rulset, the Credit card number [${
        //                    lmnt}] ${(isValidccNumber(lmnt)?'IS':'is NOT')} valid.`));
        //  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =


        //  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
        //  missing code revision #5
        //  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

    //  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    //  current code revision   ( #6 )
    //  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-1 - week 3 - PROJECT: Credit card number Validation");
    console.log("Validate the number of a credit card based on specified ruleset (code revision #6)");
    console.log("- - - - - - - - - - - - - - - - - - - -");
                        //  define the Credit card number validation routine
    function isValidccNumber(ccNumber){
                        //  define number validation ruleset - based on specifications
        let ccNumberValidationRules={
            The_number_should_be_Exactly_16_digits_long
                :()=>ccNumberString.length==16,
            The_number_should_consist_of_16_Numeric_digits
                :()=>ccNumberString===String(ccNumber).replace(/[^0-9]/g,''),
            The_number_should_have_at_least_2_Diferent_digits
                :()=>ccNumberString.replace((new RegExp(ccNumberString[0],'g')),'').length>0,
            The_last_digit_of_the_number_should_be_Even
                :()=>ccNumberString[ccNumberString.length-1]%2==0,
            The_number_should_have_digit_Checksum_greater_than_16
                :()=>ccNumberString.split('').reduce((a,b)=>Number(a)+Number(b))>16,
        };
                        //  transform the parameter into new string and remove blank spaces
        let ccNumberString=String(ccNumber).replace(/\s+/g,'');
        console.log(' ');
                        //  logout the credit card number under inspection
        console.log(`Validation of credit card number [${ccNumber
                                        }] - converted to [${ccNumberString}]`);
                        //  decide number validity - check against every rule in sequece
        let validationResult=Object.keys(ccNumberValidationRules).every(currentRule=>{
            let currentResult=ccNumberValidationRules[currentRule]();
                        //  on false: report reason the number is not passing this rule
                        //  since every() will terminate (partial boolean evaluation)
            if (!currentResult) {console.log('Number is INVALID due to rule conflict: '
                                        +currentRule.replace(/_+/g,' ')+'.')};
            return currentResult;
        });
                        //  finally, if card is valid, report so before leaving routine
        if (validationResult) {console.log(`This is a VALID credit card number.`)};
                        //  return number validation result
        return validationResult;
    }
                        //  validate each credit card number from the following array
    [   ' 1234 - 5678 - 9012 - 3456 ',  ' 1234 5678  9012 3456 ',
        'a92332119c011112',             '0000777788880000',
        4444444444444444,               6666666666661666,
        ' 006 543 210 987 651 234 ',    ' 0012 3456  7890 1234 ',
        '1111111111111110',             3111111111111110,
        6666666666666661,               1111111111111116
    ].forEach(lmnt=>isValidccNumber(lmnt));
    //  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};

runProjectccNumberValidator();

