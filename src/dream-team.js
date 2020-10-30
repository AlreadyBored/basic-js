const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = '';
  if (Array.isArray(members) === true) {

    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        for (let j = 0; j < members[i].length; j++) {
          if (members[i].charAt(j) === ' ') {
            continue;
          } else {
            result += members[i].charAt(j);
            result = result.toUpperCase().split('').sort().join('').toString();
            break;
          }
        }
      } 
    }
  } 
  if (result.length === 0) {
    result = false;
  }
  return result;
};



