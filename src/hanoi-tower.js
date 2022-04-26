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
function calculateHanoi(disksNumber, turnsSpeed ) {
  let res={ turns: null, seconds: null };
  res.turns=2**disksNumber-1;
  res.seconds= Math.floor((res.turns / turnsSpeed)*3600);
  return res;
}

module.exports = {
  calculateHanoi
};
