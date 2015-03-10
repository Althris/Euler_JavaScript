/*Smallest multiple
Problem 5
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

var num = 20;
var next = true;

while (next == true) {
	for (var i = 20; i >= 0; i--) {
		if (i == 0) {
			console.log("Lowest evenly divisible number is",num);
			next = false;
			break;
		} else if (num%i != 0) {break;};
	};
	num++;
};