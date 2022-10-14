/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const skipedIndex = []

  let result = 0

  for(const currentArray of matrix) {

    for(j = 0; j < currentArray.length; j++) {
      if(skipedIndex.includes(j)) continue

      const checkedElement = currentArray[j]

      if(checkedElement === 0) {
        skipedIndex.push(j)

        continue
      }

      result += checkedElement
    }
  }

  return result
}

module.exports = {
  getMatrixElementsSum
};
