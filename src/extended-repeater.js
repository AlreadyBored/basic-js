import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, options) {
  if (options.additionRepeatTimes > 0){
    let additionOptions = {
      repeatTimes: options.additionRepeatTimes || 1,
      separator: options.additionSeparator || '|',
      addition: '',
      additionRepeatTimes: 0,
      additionSeparator: '',
    }

    str += repeater(options.addition, additionOptions);
  }
  else str += options.addition || '';
  
  let additionArr = new Array(options.repeatTimes);
  additionArr.fill(str);

  return additionArr.join(options.separator || '+');
}
