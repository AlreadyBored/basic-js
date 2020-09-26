'use strict';
const repeater = (str, options) => {
  const string = String(str);

  let separator = options.separator,
      addition = String(options.addition),
      additionSeparator = String(options.additionSeparator);
      
      if (separator === undefined) separator = "+";
      if (additionSeparator === undefined) additionSeparator = "|";
      if (addition === 'undefined') addition = "";
      
      let repeat = options.repeatTimes,
      additionRepeat = options.additionRepeatTimes,
      separatorLength = separator.length,
      additionSeparatorLength = additionSeparator.length;
        
        if (repeat === undefined) repeat = 1;
        if (additionRepeat === undefined) additionRepeat = 1;

  const additionExpression = addition.concat(additionSeparator).repeat(additionRepeat).slice(0, -additionSeparatorLength);
  return string.concat(additionExpression).concat(separator).repeat(repeat).slice(0, -separatorLength);
}

module.exports = repeater;