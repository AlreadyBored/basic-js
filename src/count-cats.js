const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let result = 0;
  newArr = arr.flat();

  for (let i = 0; i < newArr.length; i++) {

    if (newArr[i] === '^^') {
      result += 1;
    } 
  }

  return result;
};


