/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = new Array(matrix.length)

  for(let i = 0; i < matrix.length; i++) {
    const currentArray = matrix[i]

    const transformArray = new Array(currentArray.length)

    for(let j = 0; j < currentArray.length; j++) {
      const topLeft = matrix?.[i - 1]?.[j - 1]
      const top = matrix?.[i - 1]?.[j]
      const topRight = matrix?.[i - 1]?.[j + 1]

      const left = currentArray[j - 1]
      const right = currentArray[j + 1]

      const bottomLeft = matrix?.[i + 1]?.[j - 1]
      const bottom = matrix?.[i + 1]?.[j]
      const bottomRight = matrix?.[i + 1]?.[j + 1]

      const count = [topLeft, top, topRight, left, right, bottomLeft, bottom, bottomRight].filter(Boolean).length

      transformArray[j] = count
    }

    result[i] = transformArray
  }

  return result
}

module.exports = {
  minesweeper
};
