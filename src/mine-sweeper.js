const { NotImplementedError } = require('../extensions/index.js');

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
  const arr = matrix.map(row => row.map(cell => 0)); // создаем новый массив и заполняем его нулями

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        for (let k = Math.max(i-1, 0); k <= Math.min(i+1, matrix.length-1); k++) {
          for (let l = Math.max(j-1, 0); l <= Math.min(j+1, matrix[i].length-1); l++) {
            if (k !== i || l !== j) {
              arr[k][l]++;
            }
          }
        }
      }
    }
  }
  return arr;
}


module.exports = {
  minesweeper
};
