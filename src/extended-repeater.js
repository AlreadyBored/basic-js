const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  const additionString = (addition + additionSeparator).repeat(additionRepeatTimes);
  const additionStringSub = additionString.substring(0, additionString.length - additionSeparator.length);
  const repeatString = str + additionStringSub;
  const result = (repeatString + separator).repeat(repeatTimes);

  return result.substring(0, result.length - separator.length)

}