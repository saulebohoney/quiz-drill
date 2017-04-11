//1---STATE---THIS IS DATA
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
	if(typeof question === 'number') {
		renderViews(viewQuiz);
  }
	if(question >= appState.questions.length) {
	    renderViews(viewResult);
	}	
};

//2---FUNCTIONs
//Submit button Function
let submit = function(usersInput) {
	let correctAnswer = appState.questions[counter].correctAnswer; 
console.log(usersInput);
console.log(correctAnswer);
  if(usersInput === correctAnswer) {
  	appState.score++;
		response = appState.correctResponse;
		console.log(response);
  } else {
      
        reponse = `${appState.incorrectResponse} The correct answer is ${correctAnswer}.`;
        console.log(response);
  }
    return response;

};

let response = '';
//Next button function
let nextQuestion = function() {
	let number = counter++;
	number++;
};

//Start new quiz button function
let reset = function() {
	question = 0;
	appState.score = 0;
	renderViews(viewQuiz);
};




//3---EVENT HANDLERS
$('#quiz-container').on('click', 'button', function() {
	question = 0;
	showQuiz();	
});

 $('#quiz-container').on('click', 'input[type=radio]', function () {
	let radioValue = $('input[name="option"]:checked').val();
	submit(radioValue);
 	console.log(radioValue);
});

//let radioValue = $('input[name="option"]:checked').val();

// $('#quiz-container').on('click', '#submit', function(event) {
// 	event.preventDefault();

// 	let radioValue = $('input[name="option"]:checked').val();
// 	// let userValue = radioValue
	
// 	submit(radioValue);


// });



$(function() {
	//renderViews(showMainMenu);
	showQuiz();
});
//let showQuestion = appState.questions[question].questionText;
//let showAnswers = appState.questions[question].answerChoice;
var _ = 'Yolo';
//4----RENDER
//console.log(question);
let counter = 4;

let viewMainMenu = `<h1>Quiz</h1>
		<p>This is a quiz about stuff. Click on one choice and when you are for real sure it is correct, press the submit button.</p>
		<button id="start">Start Quiz</button>`;
let viewQuiz = `<p id="question-status">This is question ${counter + 1} of ${appState.questions.length}</p>
		<p id="score">Score: ${appState.score}</p>
			<h3 id="view-question">${appState.questions[counter].questionText}</h3>
				<label class="option"><input type="radio" name="option" value="${appState.questions[counter].answerChoice[0]}"><span id="opt1">${appState.questions[counter].answerChoice[0]}</span></label>
				<label class="option"><input type="radio" name="option" value="${appState.questions[counter].answerChoice[1]}"><span id="opt2">${appState.questions[counter].answerChoice[1]}</span></label>
				<label class="option"><input type="radio" name="option" value="${appState.questions[counter].answerChoice[2]}"><span id="opt3">${appState.questions[counter].answerChoice[2]}</span></label>
				<label class="option"><input type="radio" name="option" value="${appState.questions[counter].answerChoice[3]}"><span id="opt4">${appState.questions[counter].answerChoice[3]}</span></label>
				<label class="option"><input type="radio" name="option" value="${appState.questions[counter].answerChoice[4]}"><span id="opt5">${appState.questions[counter].answerChoice[4]}</span></label>
			<button id="submit">SUBMIT</button>
			<p id="result">${response}</p>`;
let viewResult = `<h3>You answered ${_} of ${_} questions right.</h3>
				<button id="reset">RESET</button>`;	


let renderViews = function(view) {
	$('#quiz-container').html(view);
};





