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
  const CAT = '^^'
  let result = 0

  matrix.forEach(workedArray => {
    workedArray.forEach(element => {
      if(element === CAT) result++
    })
  })

  return result
}

module.exports = {
  countCats
};
