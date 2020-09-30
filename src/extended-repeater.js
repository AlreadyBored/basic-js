const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str == "undefined") return false;

  /* str это строка, которая будет повторена*/

  var baseString;
  if (str === null) {
    baseString = "null";
  } else {
    baseString = str.toString();
  }

  var resultString = "";

  var repitOptions = {
    repeatTimes: 0,
    separator: "+",
    addition: "",
    additionRepeatTimes: 0,
    additionSeparator: "|",
  };

  console.log(options);
  console.log(repitOptions);

  if (typeof options.repeatTimes !== "undefined")
    repitOptions.repeatTimes = options.repeatTimes;

  if (typeof options.separator !== "undefined")
    repitOptions.separator = options.separator;
  if (options.separator === null) repitOptions.separator = "null";

  if (typeof options.addition !== "undefined")
    repitOptions.addition = options.addition;
  if (options.addition === null) repitOptions.addition = "null";

  if (typeof options.additionRepeatTimes !== "undefined")
    repitOptions.additionRepeatTimes = options.additionRepeatTimes;

  if (typeof options.additionSeparator !== "undefined")
    repitOptions.additionSeparator = options.additionSeparator;
  if (options.additionSeparator === null)
    repitOptions.additionSeparator = "null";

  console.log(repitOptions);

  /*
 Параметры str и addition по умолчанию являются строками. В случае, если они другого типа, он должны быть преобразованы к строке.
   
   Параметры separator и additionSeparator являются строками.
   
   repeatTimes и additionRepeatTimes являются целыми числами (в случае отсутствия любого из них соответствующая строка не повторяется).
   
  */

  let repeatTimesOptios = Number(repitOptions.repeatTimes);
  let separatorOptions = repitOptions.separator.toString();
  let additionOptions = repitOptions.addition.toString();
  let additionRepeatTimesOptios = Number(repitOptions.additionRepeatTimes);
  let additionSeparatorOptions = repitOptions.additionSeparator.toString();

  /*  
   options это объект опций, который содержит следующие свойства:
   repeatTimes устанавливает число повторений str
   separator это строка, разделяющая повторения str
 
   addition это дополнительная строка, которая будет добавлена после каждого повторения str
   additionRepeatTimes устанавливает число повторений addition
 
   additionSeparator это строка, разделяющая повторения addition
 
   
   Единственный обязательный параметр — это str, остальные могут не быть переданы. Значение separator по умолчанию это '+'. Значение additionSeparator по умолчанию это '|'.
 */

  var additionRepeat = additionOptions;

  for (
    var countAdditionRepeat = 2;
    countAdditionRepeat <= additionRepeatTimesOptios;
    countAdditionRepeat++
  ) {
    additionRepeat += additionSeparatorOptions;
    additionRepeat += additionOptions;
  }

  resultString = baseString;
  resultString += additionRepeat;

  for (var countStr = 2; countStr <= repeatTimesOptios; countStr++) {
    resultString += separatorOptions;
    resultString += baseString;
    resultString += additionRepeat;
  }

  return resultString;
};
