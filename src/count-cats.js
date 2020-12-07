const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cats) {
  let total = 0;
  if (!Array.isArray(cats) || cats.length == 0) {
    return total;
  }

  for (const element of cats) {
    if (!Array.isArray(element) || element.length == 0) {
      break;
    }
    total += element.reduce(function(sum, current) {
      if (current === '^^') {
        return sum += 1;
      }
      return sum;
    }, 0);
  }
  return total;
};
