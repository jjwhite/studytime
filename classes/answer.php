<?php

class Answer
{
	public $id;
	public $AnswerText;
	public $QuestionId;
	public $isAnswer;
	public $isSelected;
	
	function Answer(){
		// Override constructor with multiple arguments
		$numargs = func_num_args();
		
		if($numargs == 1){
			//get our array argument
			$arr = func_get_arg(0);
			
			$this->id = $arr['ID'];
			$this->AnswerText = $arr['AnswerText'];
			$this->QuestionId = $arr['QuestionID'];
			$this->isAnswer = $arr['IsAnswer'];	
			$this->isSelected = false;
					
		}
	}
	
	function getAnswersByQuestionId($id){
		$mysqli = GetDB();
		$answers = array();

		$sql ='Select * from Answer where QuestionID = '.$id.' order by rand()';

		if (!$result = $mysqli->query($sql)){
			die('There was a problem connecting to the database. Please try again later');
		}
		
		while ($row = $result->fetch_assoc()){
			array_push($answers,new Answer($row));
		}
		
		return $answers;

	}
	
	
}
?>