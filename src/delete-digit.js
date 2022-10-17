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
  n = String(n).split('').map((x)=>Number(x))
  if (n[0] < n[1]){
    n.shift()
  } else{
    n.splice(n.indexOf(Math.min(...n)),1)
  }
  return Number(n.join(''))
}

module.exports = {
  deleteDigit
};
