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
  let result = '';
  let sepAdd = '';
  let addition = '';
  let separator = '+';
  if (!(options["separator"] == undefined)) {
    separator = options["separator"];
  };
  let additionSeparator = '|';
  if (!(options["additionSeparator"] == undefined))  {
    additionSeparator = options["additionSeparator"];
  };
  if (!(options["addition"] == undefined) || (options["addition"] === null)) {
    addition = options["addition"];
  };
  let repeatTimes = 1;
  if (!(options["repeatTimes"] == undefined))  {
    repeatTimes = options["repeatTimes"];
  };
  let additionRepeatTimes = 1;
  if (!(options["additionRepeatTimes"] == undefined))  {
    additionRepeatTimes = options["additionRepeatTimes"];
  };

    for (let i = 0; i < additionRepeatTimes; i++) {
      if (i == additionRepeatTimes-1) {
        sepAdd = sepAdd + addition;
      } else {
        sepAdd = sepAdd + addition + additionSeparator;
        }
      };
    for (let i = 0; i < repeatTimes; i++) {
      if (i === repeatTimes-1) {
        result = result + str + sepAdd;
      } else {
        result = result + str + sepAdd + separator;
      }
    };
  return result
}

module.exports = {
  repeater
};
