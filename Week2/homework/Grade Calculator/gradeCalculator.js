'use strict'

function gradeCalculator(score){ // function definition
    let grade;

    if(score>=0 && score<=49) grade = 'F';   //2*  We check which score matches with which grade
    else if(score>=50 && score<=59) grade = 'E';
    else if(score>=60 && score<=69) grade = 'D';
    else if(score>=70 && score<=79) grade = 'C';
    else if(score>=80 && score<=59) grade = 'B';
    else if(score>=90 && score<=100) grade = 'A'; //*2
   
    if(score>=0 && score<=100) console.log("You got a "+grade+" ("+score+"%)!"); //1 , 3 We print the results to console and score to percentage convertion
    else console.log("Wrong input, your score must be between 0 and 100");
}

gradeCalculator(67);

/*
1. convert the score into a percentage
2. calculate what grade corresponds with that percentage, and
3. shows in the command line the result: the grade and the percentage
*/