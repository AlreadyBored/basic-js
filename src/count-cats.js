const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  return matrix.flat().filter(item => item === '^^').length;
};

