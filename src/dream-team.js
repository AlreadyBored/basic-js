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
function createDreamTeam(arr) {
  let result = ''; 
  let tempArr = [];

  if (!Array.isArray(arr)) {
    return false;
  }

  arr.forEach(name => {
    if (typeof name === 'string') {
    	name = name.trim().toUpperCase();
      tempArr.push(name);
    }
  })
  
  tempArr.sort();
  tempArr.forEach(name => {
  	result = `${result}${name.trim()[0].toUpperCase()}`;
  })

  return result;
}

module.exports = {
  createDreamTeam
};
