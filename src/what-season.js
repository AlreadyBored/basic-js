const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(data) {
  if(data === undefined){
    return 'Unable to determine the time of year!';
  } else if ( data.hasOwnProperty('toString')) {
    throw new Error();
  };
  
  let season = data.getMonth();
  if ( season <= 1 || season === 11) return 'winter';
  if ( season >= 2 && season <= 4) return 'spring';
  if ( season >= 5 && season <= 7) return 'summer';
  if ( season >= 8 && season <= 10) return 'autumn';

};
