module.exports = function countCats(matrix) {
  let result = 0;
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "^^") {
        result++;
      }
    }
  }
  
  return result;
};
