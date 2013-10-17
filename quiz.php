<?php
include ('classes/db.php');
include('classes/quiz.php');
include('classes/question.php');
include('classes/answer.php');


$quiz = Quiz::getQuizById(1);
echo($quiz);
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Study Time:Quiz</title>
	<link href="css/styles.css" rel="stylesheet" type="text/css"/>
	<link href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" rel="stylesheet" type="text/css"/>
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script type="text/javascript" src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
	<script type="text/javascript" src="js/scripts.js"></script>

</head>

<body>
<div class="header"><img src="images/logo.png"/></div>
<div class="main-wrapper">
	<div class="quiz-question">
		<?php $quiz->questions[1]->displayHTML();?>
	</div>

</div>

</body>

</html>
