const appState = { 
	questions: [
	{questionText:'What is 1 + 3', answerChoice: [7,5,4,1,6],correctAnswer: 4},
	{questionText:'What is your favorite color', answerChoice: ['Blue','Black','Green','Yellow','Purple'],correctAnswer: 'Blue'},
	{questionText:'What is 3 + 3', answerChoice: [7,5,4,1,6],correctAnswer: 6},
	{questionText:'What is 4 + 3', answerChoice: [7,5,4,1,6],correctAnswer: 7}],

	currentQuestion: null,
	next: 0,
	score: 0,
	correctResponse: 'You are a Math genius!',
	incorrectResponse: 'You are not a genius!'
}


//Start button
let showQuiz = function() {
	let question = appState.next;
	let showQuestion = appState.questions[question].questionText;
	let showAnswers = appState.questions[question].answerChoice;
		
	showAnswer1 = showAnswers[0];
	showAnswer2 = showAnswers[1];
	showAnswer3 = showAnswers[2];
	showAnswer4 = showAnswers[3];
	showAnswer5 = showAnswers[4];
	
	let showScore = appState.score;		
	
	console.log(showQuestion);
	console.log(showAnswer1);
	console.log(showAnswer2);
	console.log(showAnswer3);
	console.log(showAnswer4);
	console.log(showAnswer5);
};

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
		console.log(`The correct answer is ${correctAnswer}!`);
  }
};

//submit();
//1- get user's input
//2- compare user's input to correctAnswer

//3-if correct then show You are math genius
//4-else try again 

//5-increment score
//6- and go to the next question


//Submit Answer choice function/event

//Next button function
let nextQuestion = function() {
	//change the index of question array
	//change the next state to increment
	let number = appState.next++;
	number++;
};




//Validate questions function- correct/incorrect/score incrementer(if/else)






//Start new quizz button function








//Shouw result score string
