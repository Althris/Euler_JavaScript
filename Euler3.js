/*
Largest prime factor
Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

Looks at 1 to 100,000
*/

var isPrime = function(n) {
	for (var i = 2; i < n; i++) {
		if (n%i == 0) {
			return false;
			break;
		};
	};
	return true;
};

var numerator = prompt("Enter number to find largest prime factor of:");

if(numerator%2 == 0) {
	numerator = numerator / 2;
} else {
	numerator = (numerator-1) / 2;
};

for (var i = 100000; i >= 1; i--) {		//Alterante For statement for all numbers: for (var i = numerator-1; i >= 1; i--)  This was timing out for the problem at hand.
	if (i == 1) {
		console.log(numerator," is prime.");
		break;
	} else if (numerator%i == 0) {
		if(isPrime(i)) {
			console.log("Largest Prime is: ",i);
			break;
		};
	};
};

