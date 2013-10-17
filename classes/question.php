<?php

class Question
{
	public $id;
	public $QuestionText;
	public $QuestionGroupId;
	public $Answers;

	function Question(){
	
		//Override constructor with multiple args
		$numargs = func_num_args();
		
		if($numargs == 1){
			$arg = func_get_arg(0);
			
			$this->id = $arg['ID'];
			$this->QuestionText = $arg['QuestionText'];
			$this->QuestionGroupId = $arg['QuestionGroupID'];
			$this->Answers = Answer::getAnswersByQuestionId($this->id);		
		}
	}
	
	public function displayHTML(){
		
		$html = '<div class="question-text">'.$this->QuestionText.'</div>
				<div class="answer-list"><ul>';
				
		foreach($this->Answers as $ans)
		{
			$html .= '<li>'.$ans->answerText.'</li>';
		}	
		
		echo($html.='</ul></div>');
	}
	
	public static function getQuestionsById($id){
		$mysqli = GetDB();
		$questions = array();

		$sql ='Select * from Question where QuestionGroupID = '.$id.' order by rand()';

		if (!$result = $mysqli->query($sql)){
			die('There was a problem connecting to the database. Please try again later');
		}
		
		while ($row = $result->fetch_assoc()){
			array_push($questions,new Question($row));
		}
		
		return $questions;
	}
}

?>