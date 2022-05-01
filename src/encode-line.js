const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let letters = {};
  for (let i = 0; i < str.length; i++) {
    if (letters[str[i]]) {
      letters[str[i]] = letters[str[i]] + 1
    } else if (!letters[str[i]]) {
      letters[str[i]] = 1;
    }
  };
  let res = ''
  for (let item in letters) {
    if (letters[item] !== 1) {
      res = res + letters[item] + item;
    } else {
      res = res + item;
    }
  }
  return res
}

module.exports = {
  encodeLine
};
