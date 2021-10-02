import { NotImplementedError } from "../extensions/index.js";

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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!date) {
    return "Unable to determine the time of year!";
  }
  // if (data instanceof Date)
  // console.log(isNaN(date));
  // console.log(typeof(date))
  try {
    if (
      isNaN(date) ||
      typeof date == "number" ||
      typeof date == "string" ||
      typeof date == "null" ||
      typeof date == "symbol"
    ) {
      // return "Invalid date!"
      throw new Error("Invalid date!");
    }
  } catch (error) {
    throw new Error("Invalid date!");
  }
  // console.log(date.getMonth());
  switch (date.getMonth()) {
    case 11:
      return "winter";
    case 0:
      return "winter";
    case 1:
      return "winter";
    case 2:
      return "spring";
    case 3:
      return "spring";
    case 4:
      return "spring";
    case 5:
      return "summer";
    case 6:
      return "summer";
    case 7:
      return "summer";
    case 8:
      return "autumn";
    case 9:
      return "autumn";
    case 10:
      return "autumn";

    default:
      return "Invalid date!";
  }
}
// // console.log(getSeason(new Date(2143, 11, 24, 23, 59, 35, 350)), 'winter')
// // console.log(getSeason(new Date(481, 1, 5, 21, 58, 37, 272)), "winter");
// console.log(getSeason(new Date(866, 2, 10, 12, 53, 10, 825)), "spring");
// console.log(getSeason(new Date(2455, 5, 24, 5, 17, 19, 809)), "summer");
// console.log(getSeason(new Date(1726, 7, 22, 23, 9, 55, 515)), "summer");
// console.log(getSeason(new Date(849, 6, 14, 22, 29, 14, 719)), "summer");
// console.log(getSeason(new Date(1140, 1, 28, 13, 33, 33, 459)), "winter");
// console.log(getSeason(new Date(488, 1, 4, 15, 48, 52, 400)), "winter");
// console.log(getSeason('foo'));
// console.log(getSeason({ John: 'Smith' }));
// console.log(getSeason(20192701));
// console.log(getSeason([2019, '27', 0 + '1']));
// console.log(getSeason(() => new Date()))
