/*
Summation of primes
Problem 10
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/


var sumPrimes = 0;

var isPrime = function(n) {
	if (n == 2 || n == 3) {return true};
	if (n%2 == 0 || n%3 == 0) {return false};

	var m = Math.sqrt(n);

	for (var i = 5; i <= m; i+=6) {
		if (n%i == 0) {return false};
		if (n%(i+2) == 0) {return false};
	};
	return true;
};

for (var a = 2; a < 2000000; a++) {
	if (isPrime(a)) {sumPrimes += a};
};

console.log(sumPrimes);