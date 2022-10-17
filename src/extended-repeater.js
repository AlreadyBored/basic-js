const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = '' + str;
  options.addition =
    options.addition !== undefined ? '' + options.addition : '';
  let arr = [];
  let newArr = [];
  options.additionRepeatTimes = options.additionRepeatTimes
    ? options.additionRepeatTimes
    : 1;
  options.repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  options.additionSeparator = options.additionSeparator
    ? options.additionSeparator
    : '';
  options.separator = options.separator ? options.separator : '+';
  options.addition = options.addition ? options.addition : '';
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    arr.push(options.addition);
  }

  let addition = arr.join(options.additionSeparator);
  let result = '' + str + addition;

  for (let i = 0; i < options.repeatTimes; i++) {
    newArr.push(result);
  }

  return newArr.join(options.separator);
}

module.exports = {
  repeater,
};
