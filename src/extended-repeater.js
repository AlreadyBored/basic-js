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
  let repeatTimes = 1; //колличество повторений
  let separator = '+'; //разделитель повторений
  let addition = ''; //является дополнительной строкой, которая будет добавляться к каждому повторению str;
  let additionRepeatTimes = 1; //устанавливает количество повторений addition
  let additionSeparator = '|'; // разделитель addition
  let addTotalString = '';
  let totalString = '';
  if('repeatTimes' in options){
    repeatTimes = options['repeatTimes'];
  }
  if('separator' in options){
    separator = options['separator'];
  }
  
  if('additionRepeatTimes' in options){
    additionRepeatTimes = options['additionRepeatTimes'];
  }
  if('additionSeparator' in options){
    additionSeparator = options['additionSeparator'];
  }

  if('addition' in options){
    addition = options['addition'];
   

    for(let i = 0; i < additionRepeatTimes; i++){
    

      addTotalString = `${addTotalString}${addition}${additionSeparator}`
    }
    addTotalString = addTotalString.slice(0, -additionSeparator.length);
  }





  for(let i = 0; i < repeatTimes; i++){

   totalString = `${totalString}${str}${addTotalString}${separator}`
  }
  totalString = totalString.slice(0, -separator.length);

  return totalString;
}


module.exports = {
  repeater
};
