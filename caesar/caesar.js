const caesar = function(string, shiftFactor) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let newString = '';
  [...string].forEach(letter => {
    let upperCaseCheck = false;
    if (letter === letter.toUpperCase()) {
      letter = letter.toLowerCase();
      upperCaseCheck = true;
    }
    if (alphabet.indexOf(letter) === -1) {
      newString += letter;
      return;
    }
    let oldIndex = alphabet.indexOf(letter);
    let newIndex = oldIndex + shiftFactor;
    while (newIndex < 0) {
      newIndex = newIndex + 26;
    }
    while (newIndex > 25) {
      newIndex = newIndex - 26;
    }
    Boolean(upperCaseCheck)
    ? newString += alphabet[newIndex].toUpperCase()
    : newString += alphabet[newIndex];
  });
  return newString;
}

  // if shift factor plus index of letter is greater than 25, index of new letter is total value - 25
  // use string map to create new string/array
  // revert to string and return

module.exports = caesar
