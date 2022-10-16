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
  if (Array.isArray(members)) {
    let team = "";
    let sorted = [];
    for (let i = 0; i < members.length; i++) {
      if(typeof members[i] === "string"){
        sorted.push(members[i].trim().toUpperCase());
      }
    }
    sorted = sorted.sort();
    for (let j = 0; j < sorted.length; j++) {
      let person = sorted[j];
      if (typeof person === "string") {
        team += person[0];
      }
    }
    return team;
  }
  return false;

}

module.exports = {
  createDreamTeam
};
