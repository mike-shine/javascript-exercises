let findTheOldest = function(people) {
  return people.reduce((oldest, current) => {
    let oldestAge = findAge(oldest.yearOfBirth, oldest.yearOfDeath)
    let currentAge = findAge(current.yearOfBirth, current.yearOfDeath)
    return currentAge > oldestAge ? current : oldest;
  })

  function findAge(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  }
}

module.exports = findTheOldest
