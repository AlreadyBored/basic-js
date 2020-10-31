const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  var a = 0;
  for (var i = 0; i < backyard.length; i++) {
    for (var j = 0; j < backyard[i].length; j++) {
      if (backyard[i][j] === '^^') {
        a += 1;
      }
    }
  }
  return a;
};
