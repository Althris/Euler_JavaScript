/*
10001st prime
Problem 7
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
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

var count = 0;   //count of primes identified
var ascend = 2;  //start checking primes at 2

while (count < 10001) {
	if(isPrime(ascend)) {
		count++;
	}
	ascend++;
}

console.log("the 10,001st prime is:",ascend-1);  //Ascend still gets incremented after the last test, need to reduce it by 1.