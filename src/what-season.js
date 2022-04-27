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
function getSeason( date ) {
  //1. Если нет даты, то его невозможно определить
  if (date == undefined) return 'Unable to determine the time of year!'
  if (!(date instanceof Date)) { throw Error('Invalid date!') }
  if (date.hasOwnProperty('toString')) throw new Error('Invalid date!')

  let season = date.getMonth();
  if (season === 1) return 'winter';
  if (season  === 2) return 'spring';
  if (season  === 3) return 'spring';  
  if (season  === 4) return 'spring';
  if (season  === 5) return 'summer';
  if (season  === 6) return 'summer';
  if (season  === 7) return 'summer';
  if (season  === 8) return 'autumn';
  if (season  === 9) return 'autumn';
  if (season  === 10) return 'autumn';
  if (season  === 11) return 'winter';
  if (season  === 12) return 'winter';
  
  let month = date.toString().split(' ');
  if (month[1] === 'Jan') return 'winter';
  if (month[1] === 'Feb') return 'spring';
  if (month[1] === 'Mar') return 'spring';
  if (month[1] === 'Apr') return 'spring';
  if (month[1] === 'May') return 'summer';
  if (month[1] === 'Jun') return 'summer';
  if (month[1] === 'Jul') return 'summer';
  if (month[1] === 'Aug') return 'autumn';
  if (month[1] === 'Sep') return 'autumn';
  if (month[1] === 'Oct') return 'autumn';
  if (month[1] === 'Nov') return 'winter';
  if (month[1] === 'Dec') return 'winter';
}

module.exports = {
  getSeason
};
