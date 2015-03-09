/*
Special Pythagorean triplet
Problem 9
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/


for (var a = 1; a < 998; a++) {
	for (var b = a+1; b < 999; b++) {
		for (var c = b+1; c < 1000; c++) {
			if (a+b+c == 1000) {
				if (a*a + b*b - c*c == 0) {
					console.log(a,b,c);
					console.log(a*b*c);
				};
			};
		};
	};
};
