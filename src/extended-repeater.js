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
**/

function repeater(str, options) {
  let tempArr = [];
  
  if (typeof options.additionRepeatTimes === 'undefined') {
    if (typeof options.addition !== 'undefined') {
      tempArr.push(String(options.addition));
    }
  } else {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      tempArr.push(String(options.addition));
    }
  }
  
  if (typeof options.additionSeparator === 'undefined') {
    tempArr = tempArr.join('|');
  } else {
    tempArr = tempArr.join(options.additionSeparator);
  }
  
  str = `${String(str)}${tempArr}`;
  tempArr = [];
  
  if (typeof options.repeatTimes === 'undefined') {
    tempArr.push(str);
  } else {
    for (let i = 0; i < options.repeatTimes; i++) {
      tempArr.push(str);
    }
  }
  
  if (typeof options.separator === 'undefined') {
    tempArr = tempArr.join('+');
  } else {
    tempArr = tempArr.join(options.separator);
  }
  
  return tempArr;
}

module.exports = {
  repeater
};
