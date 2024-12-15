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
  let result = '';
  let step = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      step++;
    } else {
      result += (step > 1 ? step : '') + str[i];
      step = 1;
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
