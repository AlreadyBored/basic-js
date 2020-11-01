const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    newStr = '';
  if (!options.separator) {
    options.separator = '+';
  }
  if (options.addition === undefined) {
    options.addition = '';
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }
  if (options.repeatTimes === undefined) return str + options.addition;
  for (let i = 1; i <= options.repeatTimes; i++) {
    if (i === options.repeatTimes) {
      newStr += str + additionStr(options.additionRepeatTimes - 1, options) + options.addition;
    } else {
    newStr += str + additionStr(options.additionRepeatTimes - 1, options) + options.addition + options.separator;
    }
  }
  return newStr;
}

const additionStr = (n, options) => {
  newStr = '';
  for (i = 1; i <= n; i++) {
    newStr += options.addition + options.additionSeparator;
  }
  return newStr;
};