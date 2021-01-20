const sumAll = function(num1, num2) {
  if (num1 < 0 || num2 < 0 || typeof(num1) !== 'number' || typeof     (num2) !== 'number') {
    return 'ERROR';
  }
  const whichIsGreater = Boolean(num1 < num2);
  let sum = 0;
  let smallerNumber, biggerNumber;
  if (whichIsGreater) {
    smallerNumber = num1;
    biggerNumber = num2;
  } else {
    smallerNumber = num2;
    biggerNumber = num1;
  }
  for (let i = smallerNumber; i <= biggerNumber; i++) {
    sum += i;
  }
  return sum;
}

module.exports = sumAll
