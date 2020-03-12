module.exports = function createDreamTeam(members) {
 /* if (!Array.isArray(members)) return false
  let TName = [];
  for ( let i = 0; i < members.length; i++) {
    let x = members[i].trim();
    let y = x.substr(0,1);
    TName.push(y.toUpperCase());
  }
  TName.sort()
  let z = TName.join('');
  return z;
*/

if (!Array.isArray(members)) return false
return members.filter(m => typeof m == 'string')
  .map(m => m.trim()[0].toUpperCase()).sort().join('')

}