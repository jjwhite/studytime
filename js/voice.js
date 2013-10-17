var create_email = false;
var final_transcript = '';
var recognizing = false;
var ignore_onend;
var start_timestamp;
var answer;
var answercount = 0;
var p;
var g;

var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onstart = function() {
    recognizing = true;
  };

  recognition.onerror = function(event) {
    if (event.error == 'no-speech') {

      ignore_onend = true;
    }
    if (event.error == 'audio-capture') {

      ignore_onend = true;
    }
    if (event.error == 'not-allowed') {
      if (event.timeStamp - start_timestamp < 100) {
        //showInfo('info_blocked');
      } else {
        //showInfo('info_denied');
      }
      ignore_onend = true;
    }
  };

  recognition.onend = function() {
    recognizing = false;
    if (ignore_onend) {
      return;
    }
    start_img.src = 'mic.gif';
    if (!final_transcript) {
      showInfo('info_start');
      return;
    }
    showInfo('');
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
      var range = document.createRange();
      range.selectNode(document.getElementById('final_span'));
      window.getSelection().addRange(range);
    }
    if (create_email) {
      create_email = false;
      createEmail();
    }
  };

  recognition.onresult = function(event) {
    var interim_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
    //final_transcript = capitalize(final_transcript);
    
    //final_span.innerHTML = linebreak(final_transcript);
    //interim_span.innerHTML = linebreak(interim_transcript);
    $('#answer').html(interim_transcript);
    $('#answer').html(final_transcript);
    // may need to handle some variations here (8 is a real problem showing up as "att")
    if (g.checkAnswer(final_transcript, p.getAnswer())) {
    		$('#problem').effect("highlight", {color:'green'}, 500);
    		correctAnswer();
    	} 
    	else {
    		//$('#problem').effect("highlight", {color:'red'}, 500);
    		final_transcript="";
    	}
    
    //if (final_transcript == answer) {correctAnswer();} else {final_transcript=""}
    
    if (final_transcript || interim_transcript) {
      //showButtons('inline-block');
    }
  };
  
  function startButton(event) {
  g.startGame();
  if (recognizing) {
    recognition.stop();
    return;
  }
  final_transcript = '';
  recognition.lang = ['English',         ['en-US', 'United States']];
  recognition.start();
  ignore_onend = false;
  //start_img.src = 'mic-slash.gif';
  //showInfo('info_allow');
  //showButtons('none');
  start_timestamp = event.timeStamp;
}

function correctAnswer(){
	final_transcript=""; 
	generateRandomProblem(); 
	//answercount++;
	
	$('#tally').html(g.incrementScore()); 
	$('#answer').html('');
}

var range = 11;

function generateRandomProblem()
{
	//var top = getRandNum(range);
	//var bottom = getRandNum(range);
	//answer = top + bottom;
	
	p = new Problem('+', 11);
	
	$('#top').html(p.top);
	$('#bottom').html(p.bottom);
	//$('#answer').html(answer);	
}

//function getRandNum(range)
//{
//	return Math.floor(Math.random()*range);
//}

$(function(){
	
	g = new Game(30);
	generateRandomProblem();
	//var end = setTimeout(function(){alert('end')}, 30000);

});

