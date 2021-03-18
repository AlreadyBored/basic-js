const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  //  throw new CustomError('Not implemented');
  let number=0
    number=backyard.flat().filter(i=>i==="^^").length
   return number
};
