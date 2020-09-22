const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.flat(2).filter(element => element === '^^').length;
};
