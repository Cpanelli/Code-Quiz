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
      b:"It ends the function's execution",
      c:"It returns a value to the caller",
      d:"It defines a new variable",
    
    correct: "c",
  },
  {
   
    question:
      "In JavaScript, what is the purpose of the CONST keyword when declaring a variable?",
    
      a:"To declare a variable within a loop",
      b:"To create a variable with a constant value that cannot be reassigned",
      c:"To define a variable that is only accessible within a specific function",
      d:"To declare a variable with global scope",
    
    correct:"b"
     
  },
];


const quiz = document.querySelector(" .quiz-body");
const questionEl = document.getElementById("question");
const answerEl = document.querySelectorAll(" .answer");
