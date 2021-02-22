const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|' }) {

  let strResult = String(str);
  if (addition === undefined) {
    addition = '';
  }
  
  if (!additionRepeatTimes || additionRepeatTimes === 1) {
    strResult += addition;
  } else if (additionRepeatTimes > 1) {
    strResult += addition + (additionSeparator + addition).repeat(additionRepeatTimes - 1);
  }
  
  if (repeatTimes > 1) {
    strResult += (separator + strResult).repeat(repeatTimes - 1);
  } return strResult;
}