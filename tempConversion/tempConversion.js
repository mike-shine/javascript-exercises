const ftoc = function(temp) {
  let newTemp = (temp - 32) * 5 / 9;
  return Math.round(newTemp * 10) / 10;
}

const ctof = function(temp) {
  let newTemp =(temp * 9 / 5) + 32;
  return Math.round(newTemp * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
