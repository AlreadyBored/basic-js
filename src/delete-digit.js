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
 function deleteDigit(num) {
  let maxValue = 0;
  for (let i = 0; i < num.toString().length; i++) {
      let currentValue = num.toString().slice(0, i) + num.toString().slice(i + 1);
      if (currentValue > maxValue) { maxValue = currentValue; }
  }
  return parseInt(maxValue);
}

module.exports = {
  deleteDigit
};
