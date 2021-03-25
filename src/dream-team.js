const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members) {
  let team = '';
  if( Array.isArray(members) && members.length > 0){
  for( let i = 0; i < members.length; i++) {
  if(typeof members[i] === 'string'){
  let name = members[i].trim();
  team += name[0]; 
  }
  
}
  return team.toUpperCase().split('').sort().join('')  
  } else {
 return false;
}
};

