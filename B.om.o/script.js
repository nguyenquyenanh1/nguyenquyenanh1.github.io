var obj1 = {
	"question": " 4 + 6 = ? ",
	"answer": ["1", "10", "9", "46"],
	"answer-true": "10"
}
var obj2 = {
	"question": " 11 + 7 =? ",
	"answer": ["117", "171", "18", "81"],
	"answer-true": "18"
}

var obj3 = {
	"question": " 3 - 9 =? ",
	"answer": ["-6", "-2", "-5", "6"],
	"answer-true": "-6"
}

var obj4 = {
	"question": " 1 ngay co bao nhieu giay ",
	"answer": ["60", "360", "84600", "24"],
	"answer-true": "84600"
}

var obj5 = {
	"question": " 1 + 1 = ?",
	"answer": ["2", "1", "11", "01"],
	"answer-true": "2"
}

let arrQuestions = [obj1, obj2, obj3, obj4, obj5];
let number = 0;
console.log(arrQuestions[0]);
const inputQuestion = document.getElementById('question');
const inputAnswerA = document.getElementById('answer-a');
const inputAnswerB = document.getElementById('answer-b');
const inputAnswerC = document.getElementById('answer-c');
const inputAnswerD = document.getElementById('answer-d');

	let score = 0;
function nextQuestion(_this) {
let trueAnswer = arrQuestions[number]["answer-true"];
console.log('trueAnswer :', trueAnswer);

let currentAnswer = _this.innerText;
 
if (currentAnswer == trueAnswer) {
	score += 1;
	console.log(score) 	
}
number+=1;
if (arrQuestions.length == number && score == 5) {
	wrapperquestion.style.display = 'none';
	window.location.assign("congratulation.html")
}

if (arrQuestions.length == number && score < 5) {
	wrapperquestion.style.display = 'none';
	window.location.assign("restart.html")
}

renderQuestion(number);

}
function restart() {
	window.location.assign("index.html")
}




function renderQuestion(number) {
	inputQuestion.innerHTML = arrQuestions[number].question;
	inputAnswerA.innerHTML = arrQuestions[number].answer[0];
	inputAnswerB.innerHTML = arrQuestions[number].answer[1];
	inputAnswerC.innerHTML = arrQuestions[number].answer[2];
	inputAnswerD.innerHTML = arrQuestions[number].answer[3];
}

renderQuestion(number);



