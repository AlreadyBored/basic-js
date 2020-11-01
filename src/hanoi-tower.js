const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {};
  obj.turns = 2 ** disksNumber - 1;
  obj.seconds = Math.floor((3600 * obj.turns) / turnsSpeed);
  return obj;
};
