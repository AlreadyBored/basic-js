const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const { repeatTimes, separator = '+', addition = '', additionRepeatTimes, additionSeparator = '|' } = options;
  let res = '';
  let sep = addition;

  for (let i = 1; i < additionRepeatTimes; i++) {
      sep += `${additionSeparator}${addition}`;
  }

  for (let i = 1; i < repeatTimes; i ++) {
      res += `${separator}${str}${sep}`
  }

  return `${str}${sep}${res}`;
};
  