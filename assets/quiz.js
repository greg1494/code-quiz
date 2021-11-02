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
var buttonB = document.getElementById("b");
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

// Global variables
var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 76;
var timerInterval;
var score = 0;
var correct;

function generateQuizQuestion(){
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    }
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsE1.innerHTML = "<p>" + currentQuestion.question +  "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

function startQuiz(){
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

    // Timer
    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;

        if(timeLeft === 0) {
            clearInterval(timerInterval);
            showScore();
        }
    }, 1000);
    quizBody.style.display = "block";
}

function showScore(){
    quizBody.style.display = "none";
    gameoverDiv.style.display = "flex";
    clearInterval(timerInterval);
    highscoreInputName.value = "";
    finalScoreE1.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
}


submitScoreBtn.addEventListener("click", function highscore(){

    if(highscoreInputName.value === "") {
        alert("Initials cannot be blank");
        return false;
    }
    else {
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = highscoreInputName.value.trim();
        var currentHighscore = {
            name : currentUser,
            score : score
        };

        gameoverDiv.style.display = "none";
        highscoreContainer.style.display = "flex";
        highscoreDiv.style.display = "block";
        endGameBtns.style.display = "flex";

        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores();
    }
});
