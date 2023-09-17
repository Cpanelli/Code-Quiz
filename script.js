const quizData = [
  {
    question: "In HTML, what does the ALT attribute in an <img> tag stand for?",

    a: "Alternate text",
    b: "Alignment",
    c: "Alternative source",
    d: "Animation",

    correct: "a",
  },
  {
    question:
      "Which CSS property is used to control the size of an element's content area, padding, and border combined, without including margins? ",
    a: "Width",
    b: "Height",
    c: "Margin",
    d: "Box-Sizing",
    correct: "d",
  },

  {
    question: "What does the RETURN statment do in a JavaScript function? ",
    a: "It displays a message to the user",
    b: "It ends the function's execution",
    c: "It returns a value to the caller",
    d: "It defines a new variable",

    correct: "c",
  },
  {
    question:
      "In JavaScript, what is the purpose of the CONST keyword when declaring a variable?",

    a: "To declare a variable within a loop",
    b: "To create a variable with a constant value that cannot be reassigned",
    c: "To define a variable that is only accessible within a specific function",
    d: "To declare a variable with global scope",

    correct: "b",
  },
];

const quiz = document.querySelector(" .quiz-body");
const answerEl = document.querySelectorAll(" .answer");
const questionEl = document.getElementById("question");
const footerEl = document.querySelector(" .quiz-footer");
const quizDetailEl = document.querySelector(".quiz-detail");

const a_txt = document.getElementById("a_text");
const b_txt = document.getElementById("b_text");
const c_txt = document.getElementById("c_text");
const d_txt = document.getElementById("d_text");
const buttonSubmit = document.getElementById("button");


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_txt.innerText = currentQuizData.a;
  b_txt.innerText = currentQuizData.b;
  c_txt.innerText = currentQuizData.c;
  d_txt.innerText = currentQuizData.d;

  quizDetailEl.innerHTML = (currentQuiz + 1) + " of " + quizData.length + " Questions";
}



function deselectAnswer() {
  answerEl.forEach((answerEl) => {
    answerEl.checked = false;
  });
}


function getSelected(){
    let answer;
    answerEl.forEach((answerEl)=>{
        if(answerEl.checked){
           answer = answerEl.id;
                }
        });
        return answer; 
    }
 
    
buttonSubmit.addEventListener("click", () => {
const answer = getSelected();


if(answer === quizData[currentQuiz].correct){
    score++;
} 
currentQuiz++;

if(currentQuiz < quizData.length){
    loadQuiz();
 } else{
    quiz.innerHTML = '<h2> You answered ${score}/${quizData.length} questions correctly</h2>'
    '<button type="button" onclick="location.reload()">Reload</button> ';
    
   
        
        footerEl.style.display = "none";


    }
}

)
 