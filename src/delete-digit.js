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
  const nStr = n.toString();
  const result = [];
  
  for (let i = 0; i < nStr.length; i++) {
    result.push(nStr.slice(0, i) + nStr.slice(i + 1))
  }

  return Math.max(...result.map(item => +item));
}

module.exports = {
  deleteDigit
};
