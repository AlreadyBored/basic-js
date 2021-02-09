const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members == null || members == undefined) {
    return false;
  }

  let dreamNames = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      dreamNames.push(members[i].trim().toUpperCase());
    }
  }

  let firstLetters = [];

  for (let i = 0; i < dreamNames.length; i++) {
    firstLetters.push(dreamNames[i][0]);
  }

  return firstLetters.sort().join('');
}