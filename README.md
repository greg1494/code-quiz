The Code Quiz is composed of four multiple choice questions that will test your knowledge of JavaScript fundamentals. I will explain the steps I took to create the javascript file. 


Lines 1-19: gathered HTML elements to manipulate

Lines 21-52: grouped the quiz question objects

Lines 55-60: are the global variables 

Lines 62-73: is the function that will cycle through the object array that contains the 
    quiz questions to get the questions and answers

Lines 75-91: Start Quiz function will begin which triggers the TimerRanges, hides the 
    start button, and shows the first quiz question

Lines 93-99: the function is for the end page that will display your score when you have
    completed the quiz or the timer ran out

Lines 102-125: for the Onclick of the submit button we will run the function highscore 
    that will save and stringify to the array of high scores that will already be saved into the local storage. We will then push a new user name and score into the array that we are saving in the local storage. The highscores will then be shown from the function.

Lines 127-139: this function will clear the list for the high scores and then generate 
    a new high score list from the local storage 

Lines 141-149: this function shows the high scores page, the other pages will be hiddin

Lines 151-155: this function clears the local storage of the high scores and it also 
    erases the text within the highscore board

Lines 157-164: this function shows the home screen so you can elect to replay the quiz;
    while also setting all the variables back to the default values

Lines 166-183: this function will excute to check the response of the answers

Line 185: starts the quiz