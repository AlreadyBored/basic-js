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
  str = String(str)
  let optAddition = String(options.addition)
  console.log(optAddition)
  if (options.hasOwnProperty('addition')) {
    
    if (options.additionRepeatTimes > 1 && options.hasOwnProperty('additionSeparator')) {
      optAddition = Array(options.additionRepeatTimes).fill(optAddition).join(`${String(options.additionSeparator)}`)
    } else if (options.additionRepeatTimes > 1) {
      optAddition = Array(options.additionRepeatTimes).fill(optAddition).join('|')
    }
  }

  if (options.repeatTimes > 1) {
    str = Array(options.repeatTimes).fill(String(str))
    if (options.hasOwnProperty('separator') && options.hasOwnProperty('addition')) {
      return str = str.map((x) => x + optAddition).join(`${options.separator}`)
    } else if (options.hasOwnProperty('separator')) {
      return str.join(`${options.separator}`)
    } else if (options.hasOwnProperty('addition')){
      return str.map((x)=>x + optAddition).join(`+`)
    } else{
      return str.join('+')
    }
  } else {
    if (options.hasOwnProperty('addition')){
      return str + optAddition
    } else {
      return str
    }
  }


}

module.exports = {
  repeater
};
