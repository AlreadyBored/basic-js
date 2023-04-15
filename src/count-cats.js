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
    return matrix.reduce(
        (count, matrixLine) => 
            matrixLine.reduce(
                (count, element) => element === '^^' ? count + 1 : count
            , count)
    , 0)
}

module.exports = {
    countCats
};
