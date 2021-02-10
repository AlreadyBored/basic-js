const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  const turn = Math.pow(2, disksNumber) - 1;
  const result = {
    turns: turn,
    seconds: Math.floor((turn * 3600) / turnsSpeed)
  };
  return result
};