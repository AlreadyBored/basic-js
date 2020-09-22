const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
   let { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = '|' } = options;

   typeof String(str) !== 'string' ? str = '' : str = str.toString();
   typeof String(addition) !== 'string'? addition = '' : addition = addition.toString();
   typeof String(additionSeparator) !== 'string' ? additionSeparator = '' : additionSeparator = additionSeparator.toString();
   typeof String(separator) !== 'string' ? separator = '' : separator = separator.toString();

   if (typeof +additionRepeatTimes !== 'number') {
      additionRepeatTimes = 1;
   } else {
      additionRepeatTimes = +additionRepeatTimes;
   }

   if (typeof +repeatTimes !== 'number') {
      repeatTimes = 1;
   } else { 
      repeatTimes = +repeatTimes;
      additionSeparator = '';
   }


   //(str + (addition + additionSeparator)* additionRepeatTimes + separator) * repeatTimes
   return (str + (addition + additionSeparator).repeat(additionRepeatTimes) + separator)
      .repeat(repeatTimes)
   //.slice(0, (separator !== '' || str !== '') ? -(separator.length + additionSeparator.length) : Infinity);
   //'TESTstr', { repeatTimes: undefined, separator: 'ds', addition: 'ADD!', additionRepeatTimes: undefined, additionSeparator: ')))000' }), 
   //'TESTstr ADD!'
};