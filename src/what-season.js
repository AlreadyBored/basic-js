const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  
  
let month=date.getMonth()
 if (Object.prototype.toString.call(date) !=='[object Date]'){
  throw new Error('THROWN')
}

else if (month===11 || month===0||month===1){
  return 'winter'
}
else if (month===2 || month===3||month===4){
  return 'spring'
}
else if (month===5 || month===6||month===7){
  return 'summer'
}
else if (month===8 || month===9||month===10) {
  return 'autumn'
}
else {
  return 'Unable to determine the time of year!'
};
}
