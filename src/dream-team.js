const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  if (!Array.isArray(members)) {return false
    
  }
  let newArray=[],
  string1=members.filter(i=>typeof i==='string')
  string1.forEach(e=>newArray.push(e.trim().charAt(0).toUpperCase())),
  string=newArray.sort().join('')
  return string



};
