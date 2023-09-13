var timeRemaining = 75000; //Time in milliseconds
var questions = [
  {
    question: "In HTML, what does the ALT attribute in an <img> tag stand for?",
    answers: [
      "Alternate text",
      "Alignment",
      " Alternative source",
      "Animation",
    ],
    correctAnswer: "Alternate text",
  },
  {
    question:
      "Which CSS property is used to control the size of an element's content area, padding, and border combined, without including margins? ",
    answers: ["Width", "Height", "Margin", "Box-Sizing"],
    correctAnswer: "Box-Sizing",
  },

  {
    question: "What does the RETURN statment do in a JavaScript function? ",
    answers: [
      "It displays a message to the user",
      "It ends the function's execution",
      "It returns a value to the caller",
      "It defines a new variable",
    ],
    correctAnswer: "It returns a value to the caller",
  },
  {
    // Tried to make this question a littler harder
    question:
      "In JavaScript, what is the purpose of the CONST keyword when declaring a variable?",
    answers: [
      "To declare a variable within a loop",
      "To create a variable with a constant value that cannot be reassigned",
      "To define a variable that is only accessible within a specific function",
      "To declare a variable with global scope",
    ],
    answers:
      "To create a variable with a constant value that cannot be reassigned",
  },
];

var currentQuestion = 0;

function startQuiz() {
  //Starting the timer
  var timer = setInterval(function () {
    timeRemaining -= 1000;
    // updating time display
    document.getElementById("timeRemaining").innerHTML =
      timeRemaining / 1000 + " seconds remaining";
    //disable submit button if time runs out.
    if (timeRemaining <= 0) {
      document.getElementById("submit").disabled = true;
    }
  }, 1000);
}
function showQuestion(){
    var question = questions[currentQuestion];
    document.getElementById("question") = innerHTML = question.questions;
//Show answer
    var answers = question.answers;
    for (var i =0; i < answers.length; i++);{
        var answer = document.createElement("input");
        answer.type = "radio";
        answer.name = "question" + currentQuestion;
        answer.value = answers[i];
        answer.innerHTML = answers[i];
        document.getElementById("answers").appendChild(answer);

    }
}
function submitQuiz(){ //should get users answer
    var answers = [];
    for (var i = 0; i < questions.length; i++){

        var answer = document.getElementById("question" + i)[0];
        answer.push(answer.value);
    }
    //see users score
    var score = 0;
    for (var i = 0; i < answer.length; i++){
        if (answers[i] == questions[i].correctAnswer){
            score++;
        }
    }
    document.getElementById("score").innerHTML = "Your score is" + score + "out of" + questions.length; 
}


window.onload = function(){
    startQuiz(); //quiz start

    showQuestion(); // shows first question

    document.getElementById("submit").addEventListener("click", submitQuiz);
}