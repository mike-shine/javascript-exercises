const repeatString = function(string, number) {
  if (number < 0) {
    return 'ERROR';
  }
  let resultString = '';
  let i = 0;
  while (i < number) {
    resultString += string;
    i++;
  }
  return resultString;
}

module.exports = repeatString
