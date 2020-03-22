module.exports = function repeater(str, options) {

    this.repeatTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes;
    this.separator = options.separator === undefined ? '+' : String(options.separator);
    this.addition = options.addition === undefined ? '' : String(options.addition);
    this.additionRepeatTimes = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;
    this.additionSeparator = options.additionSeparator === undefined ? '+' : options.additionSeparator;

    let result = '';

    for(let i = 0; i < this.repeatTimes; i++) {
        result += str;
        for(let j = 0; j < this.additionRepeatTimes - 1; j++){
            result += this.addition;
            result += this.additionSeparator;
        }
        if(i < this.repeatTimes){
            result += this.addition;
        }
        if(i < this.repeatTimes - 1){
            result += this.separator;
        }
    }

    return result;
};
  