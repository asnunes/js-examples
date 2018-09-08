function isEven(num){
	return (num % 2 == 0);
}

function factorial(num){
	if(num<0){
		return -1;
	}  // Return  negative number as a negative statement

	fac = 1;
	while(num > 0){
		fac *= num;
		num--;
	}
	return fac;
}

function kebabToSnake(s){
	return s.replace(/-/g,"_");
}
