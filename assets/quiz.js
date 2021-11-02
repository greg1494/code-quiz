var quizBody = document.getElementById("quiz");
var resultsE1 = document.getElementById("result");
var finalScoreE1 = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var questionsE1 = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-scorePage");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highscore-score");
var buttonA = document.getElementById("a");
var buttonA = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

var quizQuestions = [{
    question: "What are the variables used for in JavaScript programs?",
    choiceA: "Storing numbers, dates, or other values",
    choiceB: "Varying randomly",
    choiceC: "Causing high-school algebra flashbacks",
    choiceD: "None of the above",
    correctAnswer: "a"},
    
    {
    question: "Which of th efolllowig are capabilities of functions in JavaScript?",
    choiceA: "Return a value",
    choiceB: "Accept parameters and return a value",
    choiceC: "Accept parameters",
    choiceD: "None of the above",
    correctAnswer: "c"},

    {
    question: "Inside which HTML element dow we put the JavaScript?",
    choiceA: "<js>",
    choiceB: "<scripting>",
    choiceC: "<script>",
    choiceD: "<javascript>",
    correctAnswer: "c"},

    {
    question: "Which method evaluates a string of JavaScript code in the context of the specified object?",
    choiceA: "Eval",
    choiceB: "ParsInt",
    choiceC: "ParseFloat",
    choiceD: "Efloat",
    correctAnswer: "a"},
];