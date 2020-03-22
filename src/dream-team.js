module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  }
  let newArr = [];
  let garbage = [];

    for(let i = 0; i < members.length; i++){
      if(typeof members[i] != 'string') {
        garbage.push(members[i]);
      } else {
        newArr.push(members[i].split(' ').map(function(item){return item[0]}).join('')[0].toUpperCase());
      }
    }
      return newArr.sort().join('');
};