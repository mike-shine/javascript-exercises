function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	let total = 0;
	array.forEach(number => total += number);
	return total;
}

function multiply (array) {
	let total = 1;
	array.forEach(number => total *= number);
	return total;
}

function power(a, b) {
  return a**b;
}

function factorial(number) {
  if (number <= 1) {
		return 1;
	} else {
		return number * factorial(number - 1);
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}