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
function deleteDigit(/* n */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let arrNum = (n).toString().split('');
  // let arr = [];
  // for (let i = 0; i < arrNum.length; i++) {
  //   arr.push(arrNum)
  // }

}

module.exports = {
  deleteDigit
};
