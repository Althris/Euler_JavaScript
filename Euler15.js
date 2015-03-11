/*
Lattice paths
Problem 15
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.


How many such routes are there through a 20×20 grid?
*/


//(r+c)!/(r!*c!)

var factorial = function(n) {
	if (n == 1 || n == 2) {return n};
	var total = 1;
	for (var i = 2; i <= n; i++) {
		total = total*i;
	};
	return total;
};

var paths = factorial(20+20) / (factorial(20)*factorial(20));

console.log(paths);
