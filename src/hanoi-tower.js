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
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let count = 1;
  for (let i = 1; i < disksNumber; i++) {
    count = count * 2 + 1;
  }
  let seconds = Math.floor(count / (turnsSpeed / 3600));
  return {
    turns: count,
    seconds: seconds,
  };
}

module.exports = {
  calculateHanoi,
};
