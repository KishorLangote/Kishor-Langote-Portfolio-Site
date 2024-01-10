var readlineSync = require("readline-sync");
score = 0;

var userName = readlineSync.question("What is your name? ");

console.log("Welcome! " + userName + " Do you know kishor? ");

// play function :

function play(question, answer){
    var userAnswer = readlineSync.question(question);

    if(userAnswer === answer){
        console.log("Right!");
        score = score + 1 // You are also write score++.
       
      } else {
        console.log("Wrong!");  
    }
        console.log("Score: ", score);
        console.log("_____________")
}

// var questionOne = {
//     question: "Where do you live? ",
//     answer: "Pune"
// }

// var questionTwo = {
//     question: "What is your hobbies? ",
//     answer: "Reading"
// }

// var questions = [questionOne, questionTwo]

var questions = [{
    question: "Where do you live? ",
    answer: "Pune"
}, {
    question: "What is your hobbies? ",
    answer: "Reading"
}   
]

//use for loop :

for(i=0; i<questions.length; i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
}
console.log("Final Score is: ", score);