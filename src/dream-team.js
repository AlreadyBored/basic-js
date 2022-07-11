const { NotImplementedError } = require("../extensions/index.js");

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
  if (Array.isArray(members) == false) {
    return false;
  } else if (members === []) {
    return false;
  }

  let filtered = members.filter((number) => typeof number == "string");

  let result = filtered.map((el) => el.trim());

  let result2 = [];
  result.forEach((element) => result2.push(element.slice(0, 1).toUpperCase()));
  res3 = result2.sort().reduce((a, b) => a + b);
  return res3;
  //   console.log(res3);
}

module.exports = {
  createDreamTeam,
};
