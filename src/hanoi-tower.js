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
    // (2 ** 9) - 1 = 512 - 1 = 511
    let turns = (2 ** disksNumber) - 1;
    // 511 * (3600 / 4308 ) = 511 * (0,835654) = 427, 019194
    let seconds = Math.floor(turns * (3600/turnsSpeed))
    return { 
      turns, 
      seconds, 
    }
}

module.exports = {
  calculateHanoi
};
