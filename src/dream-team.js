const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return (members === undefined || !Array.isArray(members) || members == null)? false : members
  .filter(element => typeof element === "string")
  .map(element => {return element.trim().slice(0,1).toUpperCase()})
  .sort()
  .join('');
};
