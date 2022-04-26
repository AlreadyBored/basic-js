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
function repeater(str, options ) {
let res="";
let additionSeparator=(options && options.additionSeparator)?options.additionSeparator:"|";
let separator=(options && options.separator)?options.separator:"+";
let addition = (options && options.addition!==undefined)?options.addition+"":"";
let repeatTimes=(options && options.repeatTimes)?options.repeatTimes:1;
let additionRepeatTimes=(options && options.additionRepeatTimes)?options.additionRepeatTimes:1;
str=str+"";
for(let i=0;i<repeatTimes;i++)
{
res+=str;
if(addition!=="")
{
for(let j=0;j<additionRepeatTimes;j++)
{
  res+=addition;
  if (additionSeparator && j+1<additionRepeatTimes)
  {
    res+=additionSeparator;
  }
}
}
if (separator && i+1<repeatTimes)
  {
    res+=separator;
  }
}
return res;
}

module.exports = {
  repeater
};
