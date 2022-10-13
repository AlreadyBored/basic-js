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
  if (arguments.length == 0) {
    return 'Unable to determine the time of year!'
  }
  if (!date.getHours || !date.getMinutes || !date.getSeconds || date.getMonth < 0 || date.length > 3 || Object.getOwnPropertyNames(date).length ||Object.prototype.toString.call(date) != '[object Date]' || isNaN(Date.parse(date))) {
    throw new Error('Invalid date!')
  }
  date = date.getMonth()
  if ([0,1,11].includes(date)) {
    return 'winter'
  } else if ([2,3,4].includes(date)) {
    return 'spring'
  } else if ([5,6,7].includes(date)) {
    return 'summer'
  } else if ([8,9,10].includes(date)) {
    return 'fall'
}
}

module.exports = {
  getSeason
};
