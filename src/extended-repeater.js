module.exports = function repeater(str, options) {

    let {repeatTimes, separator = '+', addition = "", additionRepeatTimes, additionSeparator} = options;

    let fullAddition = new Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator);

    return new Array(repeatTimes).fill(str + fullAddition).join(separator);
};
  