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
  if (!Array.isArray(members)){
    return false
  }
  const cleanData = members.reduce((acc, value) => {
    if (typeof value === 'string' && value.length !== 0) {
      return [...acc, value.trim().toUpperCase()]
    } else {
      return acc
    }
  }, [])
  if (cleanData.length === 0){
    return false
  } else {
    cleanData.sort()
    let res = cleanData.reduce((acc, value) => {
      return `${acc}${value.slice(0, 1)}`
    }, '')
    return res
  }
}

module.exports = {
  createDreamTeam
};
