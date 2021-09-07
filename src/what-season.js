import {
  NotImplementedError
} from '../extensions/index.js';

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
export default function getSeason(date) {
  try {
    if (date.hasOwnProperty("getMonth")) {
      throw new Error();
    } else if (arguments.length != 0) {
      let monthNumber = date.getMonth();
      if (monthNumber < 2 || monthNumber > 10) {
        return "winter";
      } else if ((monthNumber > 1) & (monthNumber < 5)) {
        return "spring";
      } else if ((monthNumber > 4) & (monthNumber < 8)) {
        return "summer";
      } else if ((monthNumber > 7) & (monthNumber < 11)) {
        return "autumn";
      }
    }
  } catch (error) {
    if (arguments.length == 0) {
      return "Unable to determine the time of year!";
    } else {
      throw new Error('Invalid date!');
    }
  }
};
