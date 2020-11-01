const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsPerSecond = turnsSpeed / (60 * 60);
  let turnsNeeded = Math.pow(2, disksNumber) - 1;
  let result = Math.floor(turnsNeeded/ turnsPerSecond);
  return {turns: turnsNeeded, seconds: result}
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
