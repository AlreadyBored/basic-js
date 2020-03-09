module.exports = function repeater(str, options) {
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
};
  