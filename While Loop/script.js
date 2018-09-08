console.log("All number between -10 e 19:");

number = -10;
while(number < 20){
	console.log(number);
	number++;
}

console.log("All even numbers between 10 and 40:");

number = 10;
while(number < 41){
	if (number % 2 == 0){console.log(number)}
	number++;
}

console.log("All odd numbers between 300 and 333:")

number = 300;
while(number < 334){
	if(number % 2 == 1){console.log(number)}
	number++;
}

console.log("All numbers divisible by 5 and 3 between 5 and 50:")

number = 5;
while(number < 51){
	if(number % 5 == 0 && number % 3 == 0){console.log(number)}
	number++;	
}