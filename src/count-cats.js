const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let result = 0;
  array.forEach(item => {
    item.forEach(subItem => subItem === '^^' ? result += 1 : false)
  })
  return result
};

