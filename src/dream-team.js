module.exports = function createDreamTeam(members) {
  if(!(members instanceof Array)){
    return false;
  }
  var names = [];
  for(var i = 0; i < members.length; i++) {
    if(typeof(members[i]) != 'string'){
      continue;
    }

    names.push(members[i].trim()[0].toUpperCase());
  }

  names.sort();
  
  return names.join(''); 
};