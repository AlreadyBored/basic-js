const CustomError = require("../extensions/custom-error");
module.exports = function countCats(arr) {
  let k = 0;
  for (let i of arr) {
    for (let j of i) {
     if (j === '^^') k++;
    }
  }
  return k;
};