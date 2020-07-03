function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b 
}

function sum (arr) {
	return arr.reduce((total, current) => total + current, 0);
}

function multiply (arr) {
	return arr.reduce((a, b) => a * b, 1)
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(n) {
	if (n === 0) return 1;
	let product = 1;
	for (var i=n; i > 0; i--) {
		product *= i;
	} 
	return product;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}