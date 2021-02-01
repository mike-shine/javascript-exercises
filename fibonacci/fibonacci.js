const fibonacci = function(target) {
  if (target < 0) {
    return 'OOPS';
  }
  if (typeof target === 'string') {
    target = Number(target);
  }
  const fibArray = [1, 1];
  while (fibArray.length <= target) {
    fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
  }
  return fibArray[fibArray.length - 2];
}

module.exports = fibonacci
