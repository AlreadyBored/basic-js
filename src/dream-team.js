module.exports = function createDreamTeam(members) {

if (!Array.isArray(members)) return false
return members.filter(m => typeof m == 'string')
  .map(m => m.trim()[0].toUpperCase()).sort().join('')

}