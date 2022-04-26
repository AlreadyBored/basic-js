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
  if (!date)
  {
    return "Unable to determine the time of year!";
  }
  if (date instanceof Date)
  {
    try{
    const month=date.getUTCMonth();
    if(month===11 || month<2)
    {
      return("winter");
    }
    if(month>=2 && month<5)
    {
      return("spring");
    }
    if(month>=5 && month<8)
    {
      return("summer");
    }
    else
    {
      return("autumn");
    }
  }
  catch (e){
    throw new Error( "Invalid date!");
  }
  }
  throw new Error( "Invalid date!");
}

module.exports = {
  getSeason
};
