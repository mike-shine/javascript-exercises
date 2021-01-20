const removeFromArray = function(...arguments) {
  const array = arguments[0];
  for (let i = 0; i < (arguments.length); i++) {
    const locationOfValue = array.indexOf(arguments[i]);
    if (locationOfValue < 0) {
      continue;
    }
    array.splice(locationOfValue, 1)
  }

  return array;
}

module.exports = removeFromArray
