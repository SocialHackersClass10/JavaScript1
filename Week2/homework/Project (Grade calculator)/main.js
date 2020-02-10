const num=91; // this is the grade as a number

    function scoreCalc(a){      //this function will assign the score to its class
        if (a>=0 && a<=49){            
            gradeClass="F";
        } else if (a>49 && a<60){
            gradeClass="E";
        } else if (a>59 && a<70){
            gradeClass="D";
        } else if (a>69 && a<80){
            gradeClass="C";
        } else if (a>79 && a<90){
            gradeClass="B";
        } else if (a>89 && a<=100){
            gradeClass="A";
        } else {
            gradeClass="INVALID GRADE";
        }
        return result= `You got a ${gradeClass} (${num}%)!`;
    }

gradePct=scoreCalc(num);
console.log(gradePct);

