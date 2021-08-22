var questions_answers = [
  [
    "What is Jquery",
    "is a fast, small, and feature-rich JavaScript library.",
    "scripting or programming language that allows you to implement complex features on web pages",
    "All of the above",
    "None of above",
    "answer1",
  ],
  [
    "Which of the following is correct?",
    "jQuery is a JSON libary",
    "jQuery is a Javascript libary",
    "jQuery is a web framwork",
    "None of the above.",
    "answer2",
  ],
  [
    "What attribute in the script element must point to a copy of jQuery?",
    "src",
    "href",
    "onclick",
    "script",
    "answer1",
  ],
  ["What character is an alias in jQuery", "?", "()", "!", "$", "answer4"],
  [
    "What does following code do $( document ).ready(function()",
    "The page can be manipulated  until the document is ready.",
    "The page can't be manipulated  until the document is ready.",
    "All of the above",
    "None of the above",
    "answer2",
  ],
];

var correct = 0;
var incorrect = 0;
var clock = 6000;
var gameOverFlag = false;

setInterval(function () {
  clock--;
  document.getElementById("clock").innerHTML = clock;
  if (clock < 0 && gameOverFlag == false) {
    gameOverFlag = true;
    gameOver();
    //alert("hi")
  }
}, 1000);

var gameStarted = false;
var current_question = 0;

function startQuiz() {
  if (gameStarted == false) {
    clock = 60;
    gameStarted = true;
  }
  enableQuiz();
  if (current_question <= 4) {
    document.getElementById("question").innerHTML =
      questions_answers[current_question][0];
    document.getElementById("answer1").value =
      questions_answers[current_question][1];
    document.getElementById("answer2").value =
      questions_answers[current_question][2];
    document.getElementById("answer3").value =
      questions_answers[current_question][3];
    document.getElementById("answer4").value =
      questions_answers[current_question][4];

    document.getElementById("label1").innerHTML =
      questions_answers[current_question][1];
    document.getElementById("label2").innerHTML =
      questions_answers[current_question][2];
    document.getElementById("label3").innerHTML =
      questions_answers[current_question][3];
    document.getElementById("label4").innerHTML =
      questions_answers[current_question][4];
  } else {
    gameOver();
  }
}

function submitAnswer() {
  var answer = Array.from(document.getElementsByClassName("answers")).filter(
    (x) => x["checked"]
  );

  if (answer[0].id == questions_answers[current_question][5]) {
    current_question++;
    correct++;
    startQuiz();
  } else {
    substractFromClock();
    current_question++;
    incorrect++;
    //alert("Wrong")
    startQuiz();
  }
}

function substractFromClock() {
  clock -= 5;
}

function gameOver() {
  gameOverFlag = true;
  var name = prompt("Please enter your name");
  alert(
    "Thanks " +
      name +
      ". Your scored " +
      correct +
      " correct and " +
      incorrect +
      " incorrect."
  );
}

function enableQuiz() {
  document.getElementById("clock").style.display = "block";
  document.getElementById("thing").style.display = "block";

  document.getElementById("question").style.display = "block";
  document.getElementById("answer1").style.display = "block";
  document.getElementById("answer2").style.display = "block";
  document.getElementById("answer3").style.display = "block";
  document.getElementById("answer4").style.display = "block";

  document.getElementById("label1").style.display = "block";
  document.getElementById("label2").style.display = "block";
  document.getElementById("label3").style.display = "block";
  document.getElementById("label4").style.display = "block";
}
