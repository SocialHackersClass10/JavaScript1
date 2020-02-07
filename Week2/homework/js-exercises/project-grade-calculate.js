'use strict'

/*
    description     PROJECT: Grade calculator   -   Calculate Grades based on score
*/

function runProjectGradeCalculator() {
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-1 - week 2 - PROJECT: Grade calculator");
    console.log("Calculate Grades (A to F) based on score (0 to 100)");
    console.log("- - - - - - - - - - - - - - - - - - - -");
    //
    //  define the grade calculation routine
    //  .   it should accept a numeric "SCORE" parameter between 0 and 100
    //  .   it should return the calculated grade based on the "SCORE" parameter
    //
    function calcradeByScore(myScore){
        //
        //  define the working score based on the score parameter, normalized for out-of-bound values
        //      any value less than 0 will result in 0
        //      any value higher than 100 will result 100
        //
        let workScore=(myScore<0?0:(myScore>100?100:myScore));
        //
        //  define the working grade and return the respective result
        //
        let workGrade=(workScore<50?"F": (workScore<60?"E": (workScore<70?"D":
                                         (workScore<80?"C": (workScore<90?"B":"A")))));
        return `your %score is "${workScore}%" and your grade is "${workGrade}"!`;
    }
    for(let i=-5;i<110;i<45?i=45:i+=10){
        console.log(`If you have a score of "${i}" then ${calcradeByScore(i)}`);
    }
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};

runProjectGradeCalculator();

