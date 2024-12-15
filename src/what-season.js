const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
const monthToSeason = {
  Jan: 'winter',
  Feb: 'winter',
  Mar: 'spring',
  Apr: 'spring',
  May: 'spring',
  Jun: 'summer',
  Jul: 'summer',
  Aug: 'summer',
  Sep: 'autumn',
  Oct: 'autumn',
  Nov: 'autumn',
  Dec: 'winter',
};

function getSeason( date ) {
  if (date == undefined) return 'Unable to determine the time of year!'
  if (!(date instanceof Date)) { throw Error('Invalid date!') }
  if (date.hasOwnProperty('toString')) throw new Error('Invalid date!')

  let season = date.getMonth();
  if ([11, 0, 1].includes(season)) return 'winter';
  if ([2, 3, 4].includes(season)) return 'spring';
  if ([5, 6, 7].includes(season)) return 'summer';
  if ([8, 9, 10].includes(season)) return 'autumn';
  
  const monthAbbreviation = date.toString().split(' ')[1];
  return monthToSeason[monthAbbreviation] || 'Unknown season';
}

module.exports = {
  getSeason
};
