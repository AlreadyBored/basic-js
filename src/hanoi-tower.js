const SECONDS_PER_HOUR = 3600

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) - 1
  let seconds = Math.floor((turns * SECONDS_PER_HOUR) / turnsSpeed)
  return {turns: turns, seconds: seconds}
};
