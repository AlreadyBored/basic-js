const CustomError = require("../extensions/custom-error");
//spring, summer, autumn (fall), winter.
module.exports = function getSeason( date) {if (date instanceof Date && !isNaN(date)){
  const seasons={
    "winter":[11,0,1],
    "spring":[2,3,4],
    "summer":[5,6,7],
    "autumn":[8,9,10]
  };
  let month = date.getMonth();
  for(const value in seasons){
    if(seasons.hasOwnProperty(value)){
      if(seasons[value].includes(month)){
      return value;}
    }
  }
 
} if(!date){
  return "Unable to determine the time of year!";
}else{
 throw "new Error";
}
  };
