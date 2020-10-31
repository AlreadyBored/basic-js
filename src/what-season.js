const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (arguments.length === 0) {
    console.log('arguments.length === 0')
    throw new CustomError
  }
  if (date instanceof Date) {
    try  {
      date.getMonth()
      date.toLocaleDateString()
    } catch {
      console.log('CANNOT GETMONTH')
      throw new CustomError
    }
    if (((0 <= (date.getMonth()) && ((date.getMonth()) <= 1))) || (date.getMonth() === 11)) {
      //console.log('winter');
      return 'winter';
    } else if ((2 <= date.getMonth()) && (date.getMonth() <= 4)) {
      //console.log('spring');
      return 'spring';
    } else if ((5 <= date.getMonth()) && (date.getMonth() <= 7)) {
      //console.log('summer');
      return 'summer';
    } else if ((8 <= date.getMonth()) && (date.getMonth()<= 10)) {
      //console.log('autumn');
      return 'autumn';
    } else {
      console.log('date.getMonth() returns something wrong');
      throw new CustomError
    }
  } else {
    console.log('this date is not a DATE');
    throw new CustomError
    //return 'Unable to determine the time of year!';
  }
};


// function getSeason(date) {
//   console.log(typeof date);
//   if ((typeof date) == 'Date') {
//     if ((0 <= date.getMonth() <= 1) || (date.getMonth() == 11)) {
//       return 'winter';
//     } else if (2 <= date.getMonth() <= 4) {
//       return 'spring';
//     } else if (5 <= date.getMonth() <= 7) {
//       return 'summer';
//     } else if (8 <= date.getMonth() <= 10) {
//       return 'autumn';
//     } else {
//       return 'Error';
//     }
//   } else {
//     return 'Unable to determine the time of year!';
//   }
// };

// getSeason(new Date(2019, 11, 22, 23, 45, 11, 500));
