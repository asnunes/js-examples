//tags
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var pointsToWinDisplay = document.querySelector("p span");
var pointsToWinInput = document.querySelector("input");
var p1button = document.querySelector("#p1scored");
var p2button = document.querySelector("#p2scored");
var resetButton = document.querySelector("#reset");

//inner variables
var p1points = 0;
var p2points = 0;
var pointsToWin = 5;
var isPlaying = true;

//listeners

pointsToWinInput.addEventListener("change", setPointsToWin);
p1button.addEventListener("click", scoreButtons);
p2button.addEventListener("click", scoreButtons);
resetButton.addEventListener("click", reset);

//aux functions
function scoreButtons(){
	if(this.id == "p1scored" && p1points < pointsToWin && isPlaying){
		p1points++;
		p1display.textContent = p1points;
		if(p1points == pointsToWin){
			p1display.classList.add("won");
			isPlaying = false;
		}
	}
	else if(this.id == "p2scored" && p2points < pointsToWin && isPlaying){
		p2points++;
		p2display.textContent = p2points;
		if(p2points == pointsToWin){
			p2display.classList.add("won");
			isPlaying = false;
		}
	}
}

function reset(){
	p1points = 0;
	p2points = 0;
	p1display.textContent = 0;
	p1display.classList.remove("won");
	p2display.textContent = 0;
	p2display.classList.remove("won");
	isPlaying = true;
}

function setPointsToWin(){
	var value = Number(this.value);
	pointsToWin = value;
	pointsToWinDisplay.textContent = this.value;
	reset();
}