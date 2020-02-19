module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)){
    return false;
}
  let newArr = [];
  for (let i = 0; i < members.length; i++) {   
    if (typeof(members[i]) === 'string') {
      newArr.push(members[i].trim()[0].toUpperCase());
    }    
  }
  return newArr.sort().join('');
};