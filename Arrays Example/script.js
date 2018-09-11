function printReverse(list){ //takes an arrays as argument and print it reversely;
	for(var i = list.length -1; i >= 0; i--){
		console.log(list[i]);
	}
}

function isUniform(list){ //check if all elements are the same 
	var first = list[0]; //takes first
	for(var i = 1; i < list.length; i++){ 
		if(first !== list[i]){ //compare
			return false;
		}
	}
	return true;
}

function sumArray(list){ //sum numbers in an array
	var sum = 0;
	list.forEach(function(item){
		sum += item;
	});
	return sum;
}

function max(list){ //max number in an array
	var max = list[0]; //takes first as max
	list.forEach(function(item){
		if(item > max){ //check for new max
			max = item;
		}
	});
	return max;
}