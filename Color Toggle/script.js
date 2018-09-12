var button = document.querySelector("button");
var body = document.querySelector("body");
var blue = false;

button.addEventListener("click", function(){
	if(blue){
		body.style.background = "white";
	} else{
		body.style.background = "#3498db";
	}
	blue = !blue;
});