const appState = { 
	questions: [
	{questionText:'What is 1 + 3 =', answerChoice: [7,5,4,1,6], correctAnswer: 4},
	{questionText:'What is your favorite color?', answerChoice: ['Blue','Black','Green','Yellow','Purple'],correctAnswer: 'Blue'},
	{questionText:`Which college won the men's 2017 NCAA Championship?`, answerChoice: ['Gonzaga', 'North Carolina', 'South Carolina', 'Oregon', 'Florida'], correctAnswer: 'North Carolina'},
	{questionText:`Which college won the women's 2017 NCAA Championship?`, answerChoice: ['Gonzaga', 'North Carolina', 'South Carolina', 'Oregon', 'Florida'], correctAnswer: 'South Carolina'},
	{questionText:'Which race does Gandalf belong to?', answerChoice: ['Human', 'Wizard', 'Elf', 'Maiar', 'Mayan'], correctAnswer: 'Maiar'}	
  ],
	currentQuestion: null,
	score: 0,
	correctResponse: 'You are correct!',
	incorrectResponse: `You are incorrect.`
};

let question = appState.currentQuestion;

let showQuiz = function() {
	if(question === null) {
		renderViews(viewMainMenu);
	}
	if(question === 0) {
		renderViews(viewQuiz);
	}	
};

//Submit button Function
let submit = function(usersInput) {
	let correctAnswer = appState.questions[question].correctAnswer; 
  if(usersInput === correctAnswer) {
  	appState.score++;
		return appState.correctResponse;
  } else {
  	return `${appState.incorrectResponse} The correct answer is ${correctAnswer}.`;
  }
};

//Next button function
let nextQuestion = function() {
	let number = question++;
	number++;
};

//Start new quizz button function
let reset = function() {
	question = 0;
	appState.score = 0;
	renderViews(viewQuiz);
};


//let radioValue = $('input[type=radio]:checked').val();

//EVENT HANDLERS
$('#quiz-container').on('click', 'button', function() {
	question = 0;
	showQuiz();		
	//console.log(radioValue);
});
$(function() {
	//renderViews(showMainMenu);
	showQuiz();
});
//let showQuestion = appState.questions[question].questionText;
//let showAnswers = appState.questions[question].answerChoice;
var _ = 0;
//RENDER
let viewMainMenu = `<h1>Quiz</h1>
		<p>This is a quiz about stuff. Click on one choice and when you are for real sure it is correct, press the submit button.</p>
		<button id="start">Start Quiz</button>`;
let viewQuiz = `<p id="question-status">This is question ${_} of ${_}</p>
		<p id="score">Score: ${_}</p>
			<h3 id="view-question">${_}</h3>
				<label class="option"><input type="radio" name="option" value="${_}"><span id="opt1">${_}</span></label>
				<label class="option"><input type="radio" name="option" value="${_}"><span id="opt2">${_}</span></label>
				<label class="option"><input type="radio" name="option" value="${_}"><span id="opt3">${_}</span></label>
				<label class="option"><input type="radio" name="option" value="${_}"><span id="opt4">${_}</span></label>
				<label class="option"><input type="radio" name="option" value="${_}"><span id="opt5">${_}</span></label>
			<button id="submit">SUBMIT</button>
			<p id="result">This is where the response is.</p>`;
let viewResult = `<h3>You answered ${_} of ${_} questions right.</h3>
				<button id="reset">RESET</button>`;	

let renderViews = function(view) {
	$('#quiz-container').html(view);
};





