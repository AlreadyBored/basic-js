const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
  const translat = String(str);
  if(options.separator === undefined)
  {
    options.separator = '+';
  }
     
  if(options.additionSeparator === undefined)
  {
    options.additionSeparator = '|';
  }
     
  if(options.repeatTimes === undefined) 
  {
    options.repeatTimes = 1;
  }
     
  if(options.addition === undefined) 
  {
    options.addition = '';
  }
    
  if(options.additionRepeatTimes === undefined) 
  {
    options.additionRepeatTimes = 1;
  }
     
     options.addition = String(options.addition);
     let total ='';
     for( let i = 0; i < options.repeatTimes; i++){
      total += translat;
        for(let j = 0; j < options.additionRepeatTimes - 1; j++){
          total += options.addition + options.additionSeparator;
             }
             total += options.addition
             total += options.separator;
         }
  return total.slice(0, -options.separator.length);
};
  