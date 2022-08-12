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
function countCats(array) {
  let res = 0;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    for (let j = 0; j < element.length; j++) {
      if (element[j] === '^^') {res++}      
    }
  }
  return res;
}

module.exports = {
  countCats
};
