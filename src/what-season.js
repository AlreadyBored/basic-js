const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {


 
if ( arguments.length === 0 ) return 'Unable to determine the time of year!'; 
if (date === null) return 'Unable to determine the time of year!';
if (date === Infinity) return 'Unable to determine the time of year!';
if (date === undefined) return 'Unable to determine the time of year!';
// if (arguments[0] === undefined) return 'Unable to determine the time of year!';
if (typeof date == "undefined") return 'Unable to determine the time of year!';
 if ( Object.prototype.toString.call(date) !== '[object Date]' ) throw new Error('-----');
 // if ((typeof(dateSeason) != 'date')) throw new Error('Error');
 

// Если аргумент date не был передан, функция должна вернуть строку 'Unable to determine the time of year!' 
// Если аргумент date некорректный, функция должна выбросить ошибку (Error).

  // весна — spring, лето — summer, осень — autumn (fall), зима — winter.

  // console.log(date.getMonth());

  switch ( date.getMonth() ){

    case 0: return 'winter';
    case 1: return 'winter';
    case 2: return 'spring';
    case 3: return 'spring';
    case 4: return 'spring';
    case 5: return 'summer';
    case 6: return 'summer';
    case 7: return 'summer';
    case 8: return 'autumn';
    case 9: return 'autumn';
    case 10: return 'autumn';
    case 11: return 'winter';
   
    default: return 'Unable to determine the time of year!';
  };

};
