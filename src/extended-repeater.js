module.exports = function repeater(str, options) {
  let additionStr = "", uniqueStr = "", resultStr = "";

  if (options.addition !== undefined){
    for (i = 0; i < options.additionRepeatTimes - 1; i++) {
      additionStr += options.addition;
      (options.additionSeparator !== undefined) ? additionStr += options.additionSeparator : additionStr += `${options.additionSeparator}|`;
    }
    additionStr += options.addition
  }

  uniqueStr = str + additionStr;

  for (i = 0; i < options.repeatTimes - 1; i++) {
    resultStr += uniqueStr;
    (options.separator !== undefined) ? resultStr += options.separator : resultStr += `+`;
  }
  resultStr += uniqueStr

  return resultStr;
};
