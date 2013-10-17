//Math Problem Object
function Problem(operator, range){
	this.top = getRandNum(range);
	this.bottom = getRandNum(range);
	this.operator = operator;
}

Problem.prototype.getAnswer = function(){
	switch(this.operator){
		case '+':
			return (this.top + this.bottom);
			break;
		case '-':
			return (this.top - this.bottom);
			break;
		case '*':
			return (this.top * this.bottom);
			break;
		case '/':
			return (this.top / this.bottom);
			break;
	}
}

//Game Object
function Game (time){
	this.gametime = time * 1000;
	this.score = 0;
	this.canAnswer = false;
}

Game.prototype.startGame = function(){
	var self = this;
	this.canAnswer = true;
	setTimeout(function(){self.endGame()}, self.gametime)
}

Game.prototype.endGame = function(){
	this.canAnswer = false;
	alert('done');
}

Game.prototype.incrementScore = function(){
	this.score++;
	return this.score;
}

Game.prototype.checkAnswer = function(guess, answer){
	var self = this;
	if (self.canAnswer){
		return (guess==answer);
	}
}


//Utility functions
function getRandNum(range)
{
	return Math.floor(Math.random()*range);
}

