const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let _options = Object.assign({
    repeatTimes: 1,
    separator: "+",
    addition: "",
    additionRepeatTimes: 1,
    additionSeparator: "|"
  }, options);
  let separator = (_options.addition + _options.additionSeparator).repeat(_options.additionRepeatTimes - 1) + _options.addition;  

  return (str + separator + _options.separator).repeat(_options.repeatTimes - 1) + str + separator;
};
