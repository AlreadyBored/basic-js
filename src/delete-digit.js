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
  let arr = [];
  let arrOfN = n.toString().split('');
  for (let i = 0; i < arrOfN.length; i++) {
    let arrOfNN = arrOfN.slice();
    arrOfNN.splice(i, 1);
    arr.push(+arrOfNN.join(''));
  };
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
