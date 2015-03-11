/*
Longest Collatz sequence
Problem 14
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

var longest = 0;
var longCount = 0;

for (var i = 999999; i > 700000; i-=2) {		//Ignore even numbers because each is part of a lower odd numbers sequence.
	var n = i;
	var count = 1;								//Count start at 1 for the starting number.
	while (n > 1) {
		if (n%2 == 0) {							//If even
			count++;
			n = n/2;
		} else {								//If odd
			count++;
			n = 3*n + 1;
		};
	}
	if (count > longCount) {					//Assign new longest count, and assign starting value to longest
		longCount = count;
		longest = i;
	};
};

console.log(longest,"has a sequence of",longCount);
