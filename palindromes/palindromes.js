const palindromes = function(string) {
  let newString = '';
  [...string].forEach(character => {
    if (character === ',' || character === '.' || character === ' ' || character === '!') {
      return;
    } else {
      newString += character.toLowerCase();
    }
  });
  let reverseString = newString.split('').reverse().join('');
  return newString === reverseString;
}

module.exports = palindromes
