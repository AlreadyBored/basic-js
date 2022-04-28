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
function getSeason(date) {
  if (!date) {
    return `Unable to determine the time of year!`;
  }
  if (typeof(date.setYear) !== 'function' || date.hasOwnProperty('toString')) {
    throw new Error('Invalid date!');
  }
  let month = date.getMonth();
  const seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'fall', 'fall', 'fall', 'winter']
  return seasons[month];
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
