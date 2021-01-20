const leapYears = function(year) {
  if (year % 4 !== 0) {
    return false;
  }
  if (year % 100 === 0 && (year / 4) % 100 !== 0) {
    return false;
  }
  if (year % 100 === 0 && (year / 4) % 100 === 0) {
    return true;
  }
  if (year % 4 === 0) {
    return true;
  }

}

module.exports = leapYears
