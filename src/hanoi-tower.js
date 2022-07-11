const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 * 
 *a tower of n disks, there will be required 2n − 1 transfers 
 of individual disks to shift the tower completely to another peg.

 turnsSpeed is the speed of moving discs (in turns per hour

  turns (minimum number of turns to solve the puzzle)
seconds (minimum number of seconds to solve the puzzle at a given turnsSpeed, 
  seconds must be an integer, obtained from rounded down (floor) calculation result)
 */
function calculateHanoi(disksNumber, turnsSpeed) {
const turns = Math.pow(2,disksNumber) - 1;
const seconds = Math.floor(turns * 3600 / turnsSpeed) 
return {'turns': turns,
 'seconds': seconds};
}

module.exports = {
  calculateHanoi
};
