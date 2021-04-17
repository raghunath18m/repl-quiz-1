var readlineSync = require('readline-sync');

var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + " Let us see if you know me");

score = 0;


function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("right answer!!!");
    score += 1;
  }
  else {
    console.log("wrong answer...")
  }

  console.log("your current score: ", score);
  console.log("-------------");
}


var questions = [{
  question: "Where do I live ? ",
  answer: "rajasthan"
},{
  question: "What's my favourite Anime ? ",
  answer: "naruto"
},{
  question: "What's my favourite TV Show ? ",
  answer: "friends"
},{
  question: "What's my favourite food ? ",
  answer: "panipuri"
},{
  question: "How many languages do I speak ? ",
  answer: "4"
}]



for (let i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("your final score: ", score);