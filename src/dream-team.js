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
  let res=false;
  if(Array.isArray(members))
  {
  let goodMembers=members.filter(name=>((typeof name)=="string" && name.length>=1));
  if(goodMembers.length>0)
  {
    goodMembers=goodMembers.map(name=>name.trim().toUpperCase().substring(0,1)).sort();
    res=goodMembers.join("");
  }
}
  return res;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
