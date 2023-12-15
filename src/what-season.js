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
 *
 *   const month = date.getMonth();
  console.log(month);
  switch(month){
    case 11,0,1:
      return 'winter';
    case 2,3,4:
      return 'spring';
      case 5,6,7:
      return 'summer';
    case 8,9,10:
      return 'autumn';
    default:
      return 'Invalid date!';
  }
 */
function getSeason(/* date */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
