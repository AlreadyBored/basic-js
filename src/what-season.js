module.exports = function getSeason(date) {

  if (date === undefined) return 'Unable to determine the time of year!'
  
  if( !date.getMilliseconds()) {throw Error}
  let x = date.getMonth();

  if ( x == 11 || x == 1 || x == 0) return 'winter'
  if ( x == 2 || x == 3 || x == 4) return 'spring'
  if ( x == 5 || x == 6 || x == 7) return 'summer'
  if ( x == 8 || x == 9 || x == 10) return 'autumn'
  
};
