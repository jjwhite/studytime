<?php
include ('classes/db.php');
include('classes/quiz.php');
include('classes/question.php');
include('classes/answer.php');

$func = $_GET['f'];
$func();

function getQuiz(){
	echo(Quiz::getQuizById(1));
}
?>