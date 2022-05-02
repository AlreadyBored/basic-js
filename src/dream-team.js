const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
if ( members === null || typeof members == 'undefined') {
  return false
}
let name = []
 for (i=0; i<=members.length; i++) {
  let booleanValue = typeof members[i]
  if (booleanValue == "string") {
    name.push(members[i].trim()[0].toUpperCase())
  }
 }
if (name.length == 0) {
  return false
}
 return name.sort().join('')
}
 
module.exports = {
  createDreamTeam
};
