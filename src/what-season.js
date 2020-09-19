const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!"
  } else if (Object.keys(date).length > 0) {
    throw new Error();
  }

  const month = date.getMonth()
  switch (month) {
    case 0:
    case 1:
    case 11:
      return 'winter';
    case 2:
    case 3:
    case 4:
      return 'spring';
    case 5:
    case 6:
    case 7:
      return 'summer';
    case 8:
    case 9:
    case 10:
      return "autumn"
  }
};
