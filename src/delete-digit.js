const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
// function deleteDigit(/* n */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function deleteDigit(num) {
  let result = 0,
    numsList = [];
  while (num) {
    numsList.push(num % 10);
    num = Math.floor(num / 10);
  }
  for (let iNum = 0; iNum < numsList.length; iNum++) {
    let currPlaceNum = 0;
    for (let i = numsList.length - 1; i >= 0; i--) {
      if (i !== iNum) {
        currPlaceNum = currPlaceNum * 10 + numsList[i];
      }
    }
    result = Math.max(currPlaceNum, result);
  }
  return result;
}

module.exports = {
  deleteDigit
};
