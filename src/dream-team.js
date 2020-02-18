module.exports = function createDreamTeam(members) {
  members.sort();
  let newArr = [];
  for (let i = 0; i < members.length; i++) {    
    newArr.push(members[i].slice(0, 2));
  }
  return newArr.join('').toUpperCase();
};