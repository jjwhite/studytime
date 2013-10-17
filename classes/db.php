<?php
function GetDB()
{
	$mysqli = new mysqli('localhost', 'studytime', 'study', 'StudyTime');
	if ($mysqli->connect_error) {
    	die('Connect Error (' . $mysqli->connect_errno . ') '
            . $mysqli->connect_error);
	}
	
	return $mysqli;
}

function CleanUp($db, $result)
{
	$result->close();
	$db->close();
}
?>