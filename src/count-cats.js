const CustomError = require("../extensions/custom-error");
// let number=0;
module.exports = function countCats(backyard) {
  //  throw new CustomError('Not implemented');
  // let number=0;
 let gh=backyard.flat()
 let array=gh.filter(i=>i==="^^")
 number=array.length
   return number
};
// return number