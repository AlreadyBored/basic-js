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
  let resMatrix = [];
  for (let j = 0; j < matrix.length; j++) {
    let preArr = [];
    for (let i = 0; i < matrix[j].length; i++) {
      let res = 0;

      if (j > 0 && i > 0 && i !== matrix[j].length - 1 && j !== matrix.length - 1) {
        if (matrix[j - 1][i - 1] === true) ++res;
        if (matrix[j - 1][i] === true) ++res;
        if (matrix[j - 1][i + 1] === true) ++res;
        if (matrix[j + 1][i - 1] === true) ++res;
        if (matrix[j + 1][i] === true) ++res;
        if (matrix[j + 1][i + 1] === true) ++res;
        if (matrix[j][i - 1] === true) ++res;
        if (matrix[j][i + 1] === true) ++res;
      }
      if (j === 0 && i === 0) {
        if (matrix[j + 1][i + 1] === true) ++res;
        if (matrix[j + 1][i] === true) ++res;
        if (matrix[j][i + 1] === true) ++res;
      }

      if (j === matrix.length - 1 && i === matrix[j].length - 1) {
        if (matrix[j - 1][i - 1] === true) ++res;
        if (matrix[j - 1][i] === true) ++res;
        if (matrix[j][i - 1] === true) ++res;
      }

      if (j === 0 && i === matrix[j].length - 1) {
        if (matrix[j + 1][i - 1] === true) ++res;
        if (matrix[j][i - 1] === true) ++res;
        if (matrix[j + 1][i] === true) ++res;
      }

      if (j === matrix.length - 1 && i === 0) {
        if (matrix[j - 1][i] === true) ++res;
        if (matrix[j - 1][i + 1] === true) ++res;
        if (matrix[j][i + 1] === true) ++res;
      }

      if (j > 0 && j !== matrix.length - 1 && i === 0) {
        if (matrix[j][i + 1] === true) ++res;
        if (matrix[j - 1][i + 1] === true) ++res;
        if (matrix[j + 1][i + 1] === true) ++res;
        if (matrix[j - 1][i] === true) ++res;
        if (matrix[j + 1][i] === true) ++res;
      }

      if (j > 0 && j !== matrix.length - 1 && i === matrix[j].length - 1) {
        if (matrix[j + 1][i] === true) ++res;
        if (matrix[j - 1][i] === true) ++res;
        if (matrix[j + 1][i - 1] === true) ++res;
        if (matrix[j - 1][i - 1] === true) ++res;
        if (matrix[j][i - 1] === true) ++res;
      }

      if (j === 0 && i > 0 && i !== matrix[j].length - 1) {
        if (matrix[j + 1][i] === true) ++res;
        if (matrix[j + 1][i + 1] === true) ++res;
        if (matrix[j + 1][i - 1] === true) ++res;
        if (matrix[j][i + 1] === true) ++res;
        if (matrix[j][i - 1] === true) ++res;
      }

      if (j === matrix.length - 1 && i > 0 && i !== matrix[j].length - 1) {
        if (matrix[j - 1][i] === true) ++res;
        if (matrix[j - 1][i + 1] === true) ++res;
        if (matrix[j - 1][i - 1] === true) ++res;
        if (matrix[j][i + 1] === true) ++res;
        if (matrix[j][i - 1] === true) ++res;
      }
      preArr.push(res);
      res = 0;
    }
    resMatrix.push(preArr);
    preArr = [];
  }
  return resMatrix;
}

module.exports = {
  minesweeper
};
