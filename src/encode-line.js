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
  let strAr = str.split('');
  let encodeAr = [];
  let n = 1;
  for (let i = 0; i <= strAr.length; i++) {
      let letter = strAr[i]
      if (letter === strAr[i+1]) {
          n += 1;
      } else {
          if (n === 1) {
              encodeAr.push(letter)
          } else {
              encodeAr.push(n + letter)
          }
          n = 1;
      }
  }
  return encodeAr.join('');
}

module.exports = {
  encodeLine
};
