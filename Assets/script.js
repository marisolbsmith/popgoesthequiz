var question1 = "What is Jquery";
var question1A = "is a fast, small, and feature-rich JavaScript library.";
var question1B =
  "scripting or programming language that allows you to implement complex features on web pages";
var question1C = "All of the above";
var question1D = "None of above";

var question2 = "Which of the following is correct?";
var question2A = "jQuery is a JSON libary";
var question2B = "jQuery is a Javascript libary";
var question2C = "jQuery is a web framwork";
var question2D = "None of the above.";

var question3 =
  "What attribute in the <script> element must point to a copy of jQuery?";
var question3A = "src";
var question3B = "href";
var question3C = "onclick";
var question3D = "script";

var question4 = "What character is an alias in jQuery";
var question4A = "?";
var question4B = "()";
var question4C = "!";
var question4D = "$";

var question5 = "What does following code do $( document ).ready(function()";
var question5A = "The page can be manipulated  until the document is ready.";
var question5B = "The page can't be manipulated  until the document is ready.";
var question5C = "All of the above";
var question5D = "None of the above";

var current_question = 1;
function startQuiz() {
  document.getElementById("question").innerHTML = question1;
  document.getElementById("answer1").value = question1A;
  document.getElementById("answer2").value = question1B;
  document.getElementById("answer3").value = question1C;
  document.getElementById("answer4").value = question1D;

  document.getElementById("label1").innerHTML = question1A;
  document.getElementById("label2").innerHTML = question1B;
  document.getElementById("label3").innerHTML = question1C;
  document.getElementById("label4").innerHTML = question1D;
}

function submitAnswer() {}