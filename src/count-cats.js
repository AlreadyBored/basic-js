const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let number = 0
  for (let i=0; i<=matrix.length; i++) {
    if (Array.isArray(matrix[i])) {
      for (let item of matrix[i]) {
        if (item == '^^')
        number += 1
      }
    }
  }
  return number
}

module.exports = {
  countCats
};
