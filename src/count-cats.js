const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  matrix = matrix.join().split(',');
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i] === "^^") {
      count++;
    }
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === "^^") {
        count++;
      }
    }
  } return count;
}