const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if ( members === null ) return false;
  if (typeof(members) == 'undefined') return false;
  if (members.constructor !== Array) return false;


  var secretName = "";

  for (var i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      for (var j = 0; j < members[i].length; j++) {
        if (members[i][j] !== " ") {
          secretName += members[i][j];
          break;
        }
      }
    }
  }

  secretName = secretName.toUpperCase();

  secretName = secretName.split("").sort().join("");

  return secretName;
};
