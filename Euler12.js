/*
Highly divisible triangular number
Problem 12
The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Let us list the factors of the first seven triangle numbers:

 1: 1
 3: 1,3
 6: 1,2,3,6
10: 1,2,5,10
15: 1,3,5,15
21: 1,3,7,21
28: 1,2,4,7,14,28
We can see that 28 is the first triangle number to have over five divisors.

What is the value of the first triangle number to have over five hundred divisors?
*/

var count = 0;
var triNum = 0;
var inc = 1;

while (count <= 500) {
	count = 0;
	triNum = triNum + inc;
    if (triNum%2 != 0) {		//Increases in divisors should happen on even numbers.
        inc++;
        continue;
    }
    var limit = triNum;
	for (var i = 1; i <= limit; i++) {		//Loop through factors from 1 to the current triangular number
		if (triNum%i == 0) {				//If the current i is a factor...
			limit = triNum / i;				//You can reduce the limit of your check by dividing by i  ie. for 28: if 2 is a factor, no number over 28/2 = 14 is a factor.
			if (limit != i) {				//Additionally unless the factor you just identified is a square of the number, you've actually identified two factors.
				count++;
			};
			count++;
		};
	};

	inc++;

}

console.log(triNum,"has > 500 divisors.");