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

  let nameTeam = [];
  if(arr === null || arr === undefined){
    return false;
  }

  for(let i = 0; i < arr.length; i++){

    if(typeof(arr[i]) === 'string'){
      let str = arr[i].trim().toUpperCase();
      nameTeam.push(str[0]);
    }
  }

  if(nameTeam.length === 0){
    return false;
  }
 return nameTeam.sort().join('')

}
console.log(createDreamTeam(false))
module.exports = {
  createDreamTeam
};
