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
  if (date === undefined) {
    return 'Unable to determine the time of year!';
}

// Check if the date is a valid instance of Date or a date-like object
if (!(date instanceof Date) || isNaN(date)) {
    // Check for a fake date-like object (via toString)
    if (typeof date === 'object' && typeof date.toString === 'function' && date.toString() === new Date().toString()) {
        throw new Error('Invalid date!');
    }
    throw new Error('Invalid date!');
}

// Extract the month from the date
const month = date.getMonth();

// Return the appropriate season based on the month
if (month === 11 || month <= 1) {
    return 'winter';
} else if (month >= 2 && month <= 4) {
    return 'spring';
} else if (month >= 5 && month <= 7) {
    return 'summer';
} else if (month >= 8 && month <= 10) {
    return 'autumn';
}

return 'Unable to determine the time of year!';
}

module.exports = {
  getSeason
};
