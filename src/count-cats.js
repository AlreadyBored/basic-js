const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
//  ? throw new CustomError('Not implemented');
  return backyard.flat().filter(element => element === '^^').length;
};
