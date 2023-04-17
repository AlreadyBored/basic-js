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
function UserException(message) {
  this.message = message;
  this.name = "Error";
}
function getSeason(date) {

  if(!date) return 'Unable to determine the time of year!';
  if(!((date) instanceof Date)) throw new UserException("Invalid date!");
 
  let checkMonth = date.getMonth();
  if (checkMonth >=0 && checkMonth < 2 || checkMonth == 11) {
    return 'winter';
  } 
  if (checkMonth >=2 && checkMonth < 5) {
    return 'spring';
  } 
  if (checkMonth >=5 && checkMonth < 8) {
    return 'summer';
  } 
  if (checkMonth >=8 && checkMonth < 11) {
    return 'autumn';
  }  
}

module.exports = {
  getSeason
};
