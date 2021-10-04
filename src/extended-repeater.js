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
      let result ="";
    let add="";
    if (options.addition === undefined) {
        options.addition = ''}
    if (options.additionSeparator === undefined) {
        options.additionSeparator = '|'}
    if (options.separator===undefined) {
        options.separator = '+'}
    for (let i = 0; i < options.additionRepeatTimes - 1; i++){
        add += options.addition + options.additionSeparator;
    }
    add += options.addition;
    str = str + add;
    for (let i = 0; i < options.repeatTimes - 1 ; i++){
        result += str + options.separator;
    }
    result += str;
    return result;
  // remove line with error and write your code here
}

