const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  
  let tower = {};
  tower.turns = 2 ** disksNumber - 1;
  tower.seconds = Math.floor((tower.turns) / (turnsSpeed / 3600));

  return tower;
}