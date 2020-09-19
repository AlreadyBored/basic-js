const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (!options) return str;

  var repeat = (value, count, separator) => {
    return Array(count).fill(value).join(separator);
  };

  var value = str;
  if ('addition' in options) {
    value += repeat(options.addition + '', options.additionRepeatTimes, options.additionSeparator || '|');
  }

  return repeat(value, options.repeatTimes, options.separator || '+');
};