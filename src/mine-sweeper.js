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

	let col = matrix.length;
	let row = matrix[0].length;
	let arr = Array.from(Array(col), () => new Array(row));

	for (let i = 0; i < col; i++) {
		for (let j = 0; j < row; j++) {
			let index = 0;

			if (i > 0) {
				if (matrix[i - 1][j - 1]) { index++ };
				if (matrix[i - 1][j]) { index++ };
				if (matrix[i - 1][j + 1]) { index++ };
			}

			if (i < col - 1) {
				if (matrix[i + 1][j - 1]) { index++ };
				if (matrix[i + 1][j]) { index++ };
				if (matrix[i + 1][j + 1]) { index++ };
			}

			if (matrix[i][j - 1]) { index++ };
			if (matrix[i][j + 1]) { index++ };

			arr[i][j] = index;
		}
	}
	return arr;
}

module.exports = {
	minesweeper
};
