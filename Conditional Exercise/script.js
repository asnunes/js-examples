age = prompt("How old are you?");

if(age < 0){console.log("It's can't be a negative number...")}

else if(age == 21){console.log("Happy 21st birthday")}	

else if (age % 2 == 1){console.log("Yor age is odd!")}

else if (Math.sqrt(age) % 1 == 0) {console.log("Perfect Square!")}