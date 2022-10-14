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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let month = date.getMonth()
  if (month===null){return "Invalid date!"}
  let db = {1:'winter', 2:'spring', 3:'spring', 4:'spring', 5:'summer', 6:'summer', 7:'summer', 8:'autumn', 9:'autumn', 10:'autumn', 11:'winter', 12:'winter',}
  console.log(db[month])
  return db[month]
}

module.exports = {
  getSeason
};
