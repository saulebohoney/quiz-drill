const appState = { 
	questions: [
	{questionText:'What is 1 + 3', answerChoice: [7,5,4,1,6],correctAnswer: 4},
	{questionText:'What is 2 + 3', answerChoice: [7,5,4,1,6],correctAnswer: 5},
	{questionText:'What is 3 + 3', answerChoice: [7,5,4,1,6],correctAnswer: 6},
	{questionText:'What is 4 + 3', answerChoice: [7,5,4,1,6],correctAnswer: 7}],

	currentQuestion: null,
	score: 0,
	correctResponse: 'You are a Math genius!',
	incorrectResponse: 'Try again!'
}




//Start button
let start = function() {
	currentQuestion = 0;
	showQuiz = appState.questions[0].questionText;
	showAnswer1 = appState.questions[0].answerChoice[0];
	showAnswer2 = appState.questions[0].answerChoice[1];
	showAnswer3 = appState.questions[0].answerChoice[2];
	showAnswer4 = appState.questions[0].answerChoice[3];
	showAnswer5 = appState.questions[0].answerChoice[4];
	showScore = appState.score;
};

//<h1> this quiz </h1>
//<p> what is 1 + 3 </p>
//<button>submit</button>

//Submit button Function
let submit = function(usersInput) {
	var correctAnswer = appState.questions[0].correctAnswer; //4
  if(usersInput === correctAnswer) {
  	console.log(appState.correctResponse);
  let showScore = appState.score++;
  currentQuestion = appState.questions[1].questionText;
  }
  else if (usersInput !== correctAnswer) {
  	console.log(appState.incorrectResponse);

  }

};

submit(4);
//1- get user's input
//2- compare user's input to correctAnswer

//3-if correct then show You are math genius
//4-else try again 

//5-increment score
//6- and go to the next question


//Submit Answer choice function/event





//Next button function





//Validate questions function- correct/incorrect/score incrementer(if/else)






//Start new quizz button function








//Shouw result score string
