var initalquiz;
var yessounds = ["nice-work.wav", "yes-2.wav", "yes-indeed.wav", "you-got-it-1.wav"];
var nosounds = ["no-6.wav", "no-thats-not-gonna-do-it.wav"];

function QuizController ($scope, $http){

	$http.get('ajaxcontroller.php?f=getQuiz').success(function(data) {
    	$scope.quiz = data;
  	});
  
	/*$scope.quiz = {
		title: 'Quiz Title',
		id: 1,
		activeIX: 0,
		numCorrect: 0,
		showNext: false,
		questions: [
			{
				id: 1,
				QuestionGroupId: 1,
				QuestionText: 'What is the air-speed velocity of a coconut-laden swallow?',
				Answers: [
					{id: 1, QuestionId: 1, AnswerText: 'This is potential Answer 1', isAnswer: '1', isSelected:false},
					{id: 2, QuestionId: 1, AnswerText: 'This is potential Answer 2', isAnswer: '0', isSelected:false},
					{id: 3, QuestionId: 1, AnswerText: 'This is potential Answer 3', isAnswer: '0', isSelected:false},
					{id: 4, QuestionId: 1, AnswerText: 'This is potential Answer 4', isAnswer: '0', isSelected:false}
				]
				
			},
			
			{
				id: 2,
				QuestionGroupId: 1,
				QuestionText: 'This is Question 2',
				Answers: [
					{id: 5, QuestionId: 2, AnswerText: 'This is potential Answer 1', isAnswer: '0',isSelected:false},
					{id: 6, QuestionId: 2, AnswerText: 'This is potential Answer 2', isAnswer: '1',isSelected:false}
				]
			},
			
			{
				id: 3,
				QuestionGroupId: 1,
				QuestionText: 'This is Question 3',
				Answers: [
					{id: 7, QuestionId: 2, AnswerText: 'This is potential Answer 1', isAnswer: '0',isSelected:false},
					{id: 8, QuestionId: 2, AnswerText: 'This is potential Answer 2', isAnswer: '1',isSelected:false}
				]
			}
		]
	};*/
	
	
	
	
	
	$scope.checkAnswer = function(ans){
		ans.isSelected = true;
		$scope.quiz.showNext = true;
		if (ans.isAnswer == 1)
		{
			var sound = new Audio("audio/"+yessounds[Math.floor(Math.random() * 4)]);
			sound.play();
			
			$scope.quiz.numCorrect++;
		}
	}
	
	
	
	$scope.nextQuestion = function(){
		if ($scope.quiz.questions.length <= $scope.quiz.activeIX + 1){
			
			$('#myModal').modal('show')
		}else{
			$scope.quiz.showNext = false;
			$scope.quiz.activeIX++;
		}
	}
	
	$scope.resetQuiz = function(){
		//update $scope.quiz from database again
		$http.get('ajaxcontroller.php?f=getQuiz').success(function(data) {
    		$scope.quiz = data;
  		});		
  		
  		$('#myModal').modal('hide')
		
	}
	
	
};