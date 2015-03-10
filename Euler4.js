/*
Largest palindrome product
Problem 4
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

var num1 = 999;
var num2 = 999;
var maxPalindrome = 0;
var numA;
var numB;

//isPalindrome multiplies two numbers and returns true if the product is a palindrome
var isPalindrome = function(n,m) {
	var num = n*m;
	var textProduct = num.toString();
	var pLength = textProduct.length;
	
	for (var i = 0; i < Math.floor(pLength/2); i++) {  //Loop to check each number matches working from the ends in to the middle.
		if(textProduct.charAt(i) == textProduct.charAt(pLength-1-i)) {
			continue;
		} else {
			return false;
			break;
		};
	};
	return true;
};

//Loop starts at the highest end and decreases the second number by 1 each iteration.  Once the second number hits zero it decreases the first number by 1 and starts again.
for (var a = num1; a >= 0; a--) {
	if (a*a < maxPalindrome) {break;}  //a*a is the highest value the current sequence can have, if it is lower than the current max, you can stop.
	for (var b = a; b >= 0; b--) {
		if (isPalindrome(a,b)){
			if (a*b > maxPalindrome) {  //If current palindrome is larger than the previous max, assign it as the new max
				maxPalindrome = a*b;
				numA = a;
				numB = b;
			};
		};
	};
};

console.log(numA,'*',numB,'=',maxPalindrome);