const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  return backyard.flat().reduce((counter, element) => {
    return counter += '^^' === element;
  }, 0);
};
