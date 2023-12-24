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
function deleteDigit(n) {
  let nArray = n.toString().split('');
  let maxNumber = 0;
  for (let i = 0; i < nArray.length; i++) {
      if (maxNumber <= nArray.filter((e, index) => index != i).join('')) {
          maxNumber = nArray.filter((e, index) => index != i).join('')
      }
  }
  return +maxNumber
}

module.exports = {
  deleteDigit
};
