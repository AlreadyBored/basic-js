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
  let res = 0;
  let array = String(n).split('').map((x) => x = Number(x));

  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] < array[i] && res < 1) {
      res++;
      array.splice(i - 1, 1);
    }
  }
  if (res < 1)
    array.pop();

  return Number(array.join(''));

}

module.exports = {
  deleteDigit
};
