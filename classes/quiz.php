<?php


class Quiz
{
	public $id;
	public $questions;
	public $title;
	public $activeIX;
	public $numCorrect;
	public $showNext;


	function Quiz(){
		
		//Override constructor with multiple args
		$numargs = func_num_args();
		
		if($numargs == 1){
			$arg = func_get_arg(0);
			
			$this->activeIX = 0;
			$this->numCorrect=0;
			$this->showNext=false;
			$this->id = (int)($arg['ID']);
			$this->title = $arg['Title'];
			$this->questions = Question::getQuestionsById($this->id);
			
		}
	}
	
	
	public static function getQuizById($id){
			$mysqli = GetDB();
			
			$sql ='Select * from QuestionGroup where ID = '.$id;
	
			if (!$result = $mysqli->query($sql)){
				die('There was a problem connecting to the database. Please try again later');
			}
			
			while ($row = $result->fetch_assoc()){
				return json_encode(new Quiz($row));
			}
			
		}

}

?>