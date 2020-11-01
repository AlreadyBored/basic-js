const CustomError = require("../extensions/custom-error");
module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  let str = '';
  let a = [];
  for (let i of arr) {
    if (typeof i === 'string') {
      for (j = 0; j < i.length; j++){
       if (i[j] !== ' ') {
        a.push ((i[j]).toUpperCase());
        break;
       }
    }
    }
  }
  a.sort();
  for (let i of a) {
    str += i;
  }
  return str;
};