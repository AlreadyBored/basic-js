const { NotImplementedError } = require('../extensions/index.js');

// n.length = undefined

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let num = n
  let x = 0
  for (; num.toString().length !== 1;) {
    for (let i = 0; i < num.toString().length; i++) {
      x += +num.toString()[i]
    }
    num = x
    x = 0
  }
  return num
}

module.exports = {
  getSumOfDigits
};
