const appState = { 
	questions: [
	{questionText:'What is 1 + 3 =', answerChoice: [7,5,4,1,6], correctAnswer: 4},
	{questionText:'What is your favorite color?', answerChoice: ['Blue','Black','Green','Yellow','Purple'],correctAnswer: 'Blue'},
	{questionText:`Which college won the men's 2017 NCAA Championship?`, answerChoice: ['Gonzaga', 'North Carolina', 'South Carolina', 'Oregon', 'Florida'], correctAnswer: 'North Carolina'},
	{questionText:`Which college won the women's 2017 NCAA Championship?`, answerChoice: ['Gonzaga', 'North Carolina', 'South Carolina', 'Oregon', 'Florida'], correctAnswer: 'South Carolina'},
	{questionText:'Which race does Gandalf belong to?', answerChoice: ['Human', 'Wizard', 'Elf', 'Maiar', 'Mayan'], correctAnswer: 'Maiar'}	
  ],
	currentQuestion: null,
	next: 0,
	score: 0,
	correctResponse: 'You are correct!',
	incorrectResponse: `You are incorrect.`
};

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
	let correctAnswer = appState.questions[appState.next].correctAnswer; 
  if(usersInput === correctAnswer) {
  	appState.score++;
		return appState.correctResponse;
  } else {
  	return `${appState.incorrectResponse} The correct answer is ${correctAnswer}.`;
  }
};

//Next button function
let nextQuestion = function() {
	let number = appState.next++;
	number++;
};

//Start new quizz button function
let reset = function() {
	appState.next = 0;
	appState.score = 0;
	showQuiz();
};


