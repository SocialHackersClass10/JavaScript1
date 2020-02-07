'use strict'

/*
    description     exercise with data type comparison
*/

function runExercise08 () {
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-1 - week 1 - Exercise 08");
    console.log("Data type comparison");
    console.log("- - - - - - - - - - - - - - - - - - - -");
    function getVarInfo(varName,varType,varEmpty,varRef){
        return "Created variable named `"+varName+"` and assigned "
                +(varEmpty?"an EMPTY VALUE":"the value `"+varRef+"`")
                +" of type `"+varType+"`";
        }
    function compareDatatype(param1name,param1var,param2name,param2var){
        return "Comparing data types of `"+param1name+"` and `"+param2name+"` : "
                +(typeof(param1var)==typeof(param2var)?'SAME TYPE':'Not same type');
        }
    let emptyString='';
    console.log(getVarInfo("emptyString","String",true,emptyString));
    let userName='Unknown user';
    console.log(getVarInfo("userName","String",false,userName));
    let emptyObject={};
    console.log(getVarInfo("emptyObject","Object",true,emptyObject));
    let mySiblings=['Brother','Sister'];
    console.log(getVarInfo("mySiblings","Array",false,mySiblings));
    console.log("- - - - - - - - - - - - - - - - - - - -");
    console.log(compareDatatype('emptyString',emptyString,'userName',userName));
    console.log(compareDatatype('emptyString',emptyString,'emptyObject',emptyObject));
    console.log(compareDatatype('emptyString',emptyString,'mySiblings',mySiblings));
    console.log(compareDatatype('userName',userName,'emptyObject',emptyObject));
    console.log(compareDatatype('userName',userName,'mySiblings',mySiblings));
    console.log(compareDatatype('emptyObject',emptyObject,'mySiblings',mySiblings));
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};

runExercise08();

