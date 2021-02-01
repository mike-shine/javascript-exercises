const getTheTitles = function(array) {
  const arrayOfTitles = [];
  array.map(book => {
    arrayOfTitles.push(book.title);
  });
  return arrayOfTitles;
}

module.exports = getTheTitles;
