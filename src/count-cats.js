const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let dimTwo;
  let result = 0;
  for (i=0; i<matrix.length;i++) {
    dimTwo = matrix[i]
    for (j = 0; j< dimTwo.length; j++) {

      if (dimTwo[j] == "^^") {
        result++
      }
    }
  }
  console.log(result)
  return result;
};

