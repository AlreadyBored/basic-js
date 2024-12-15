const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let firstValue = s1.split("");
  let secondValue = s2.split("");
  let result = 0;

  for (let char of firstValue) {
    let findIndex = secondValue.indexOf(char);

    if (findIndex !== -1) {
      result++;
      secondValue.splice(findIndex, 1);
    }
  }

  return result;
}

module.exports = {
  getCommonCharacterCount
};
