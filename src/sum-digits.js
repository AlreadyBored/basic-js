const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

function getSumOfDigits(n) {
    // Попробуем преобразовать в строку, а затем в массив
    let arr = n.toString().split('')
    while (arr.length > 1) {
      arr = arr.reduce((a, b) => {
        // применяет функцию reducer к каждому элементу массива (слева-направо)
        return a + +b;
      }, 0).toString().split('')
    }
    return +arr[0];
}

module.exports = {
  getSumOfDigits
};
