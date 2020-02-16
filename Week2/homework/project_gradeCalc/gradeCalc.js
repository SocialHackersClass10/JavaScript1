'use strict'
/*In this project you'll write a function that calculates grades, 
based on the American grading system! Let's say a student did a test and they got a 60 out of 100, this function will:
1.convert the score into a percentage
2.calculate what grade corresponds with that percentage, and
3.shows in the command line the result: the grade and the percentage
In this example this is what we would expect the function to return in the command line:

You got a D (60%)!
When writing the function, make use of the following grade scores:

Grade A (90% - 100%)
Grade B (80% - 89%)
Grade C (70% - 79%)
Grade D (60% - 69%)
Grade E (50% - 59%)
Grade F (0% - 49%)*/



function grade(score){
  if(score >= 90 && score <= 100){
    console.log(`You got a A (${score}%)!`)
  }
  else if(score >= 80 && score <= 89){
    console.log(`You got a B (${score}%)!`)
  }
  else if(score >= 70 && score <= 79){
    console.log(`You got a C (${score}%)!`)
  }
  else if(score >= 60 && score <= 69){
    console.log(`You got a D (${score}%)!`)
  }
  else if(score >= 50 && score <= 59){
    console.log(`You got a E (${score}%)!`)
  }
  else if(score >= 0 && score <= 49){
    console.log(`You got a F (${score}%)!`)
  }
}

grade(Math.floor(Math.random() * 100));



